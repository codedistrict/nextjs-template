import { xml2js } from 'xml-js';

// import { getIdToken, logout } from "@/lib/auth";
import serviceDiscovery from '@/lib/serviceDiscovery';
import { CustomError, FileSignedUpResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';

export type APIResponse<T = object> = {
  success: boolean;
  status: number;
  data?: T;
  error_message?: string;
};

export type FileAPIResponse = {
  success: boolean;
  status: number;
  data?: {
    Bucket: string;
    ETag: string;
    Key: string;
    Location: string;
  };
  error_message?: string;
};

type XMLText = {
  _text: string;
};

export type XmlToJsonResult = {
  PostResponse: {
    [key: string]: XMLText;
  };
  _declaration: XMLText;
};

export function query(obj: any) {
  const params = [];
  for (const key in obj) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return '?' + params.join('&');
}

const handleSuccess = (response: Response, responseJson: any): APIResponse => {
  return {
    data: responseJson,
    status: response.status,
    success: true,
  };
};

const handleUnauthenticated = (): APIResponse => {
  // logout(); // TODO: Add logout method after implement auth.ts in lib
  // TODO show session expired message
  return {
    status: 0,
    success: false,
  };
};

/**
 * General fetcher thats being used with useSwr hook
 * @param SERVICE. The aws lambda service to fetch data from
 * @param method
 * @param path
 * @param params
 * @param headers
 */
export async function fetcher(
  SERVICE: string,
  method: string,
  path: string,
  params?: object | string | null,
  headers?: { [key: string]: string } | null,
  useToken: boolean = true
) {
  let body;
  let response: Response;
  let serviceUrl = '';

  // Common headers
  headers = {
    Accept: 'application/json',
    'Accept-Language': 'en',
    ...headers,
  };

  // Headers to exclude if request is service discovery or without authentication
  // const token = await getIdToken(); // TODO: Add getIdToken method after implement auth.ts in lib
  const token = 'auth_token_here';
  if (useToken && !token) return false; // quit if no token

  if (SERVICE && useToken && token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': typeof params === 'string' ? 'text/plain' : 'application/json',
      mode: 'cors',
    };
  }

  // Set up GET params
  if (params && method.toLowerCase() === 'get') {
    path += query(params);
    body = null;
  }
  // Stringify params unless it's form-data (files)
  else if (params && headers && headers['Content-Type'] !== 'multipart/form-data') {
    body = JSON.stringify(params);
  }

  let options = {
    body,
    headers,
    method,
  };

  // If the request is for service discovery, then service urls are not needed
  // eslint-disable-next-line no-useless-catch
  try {
    if (SERVICE) {
      serviceUrl = (await serviceDiscovery.get(SERVICE)) as string;
    }
  } catch (e) {
    throw e;
  }

  const apiURL = serviceUrl + path;
  response = await fetch(apiURL, options);

  // handle response
  let responseJson;

  try {
    responseJson = await response.json();
  } catch (error) {
    responseJson = response; // response already read error
  }

  if (response.ok) return responseJson;

  if (response.status === 401) return handleUnauthenticated();
  throw new CustomError(responseJson.message, {
    ...responseJson,
    code: response.status,
  });
}

/**
 * Fetch function adapted to upload S3 files
 * @param signData S3 signed url data from portfolio service
 * @param file File to upload
 */
export async function fileS3Uploader(
  signData: FileSignedUpResponse,
  file: File
): Promise<FileAPIResponse> {
  const formData = new FormData();

  Object.entries(signData.fields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append('file', file, file.name);

  let options = {
    body: formData,
    method: MethodTypes.POST,
  };

  try {
    const response = await fetch(signData.url, options);

    const responseText = await response.text();
    const parsedResponse: XmlToJsonResult = xml2js(responseText, {
      compact: true,
    }) as any;

    const data: any = {};
    Object.entries(parsedResponse.PostResponse).forEach(([key, value]: [string, any]) => {
      data[key] = value._text;
    });

    return handleSuccess(response, data) as FileAPIResponse;
  } catch (error) {
    console.log('Http Error: ', error);
    return { status: 500, success: false };
  }
}
