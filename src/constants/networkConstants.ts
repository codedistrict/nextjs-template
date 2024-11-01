const BaseImagesURL = process.env.NEXT_PUBLIC_BASE_IMAGES_URL;

const SERVICES = {
  ACCOUNT: '/api/account-service-url',
  AREAS: 'areas',
  BUSINESS: '/api/business-service-url',
  CHAT: '/api/chat-service-url',
  FILES: '/api/files',
  NOTIFICATION: '/api/notification-service-url/manually-deployed',
  SOCKET: 'socket',
  POSTS: 'https://jsonplaceholder.typicode.com',
};

const NetworkConstants = {
  URL: {
    BaseImagesURL,
    Client: {
      BaseHost: process.env.NEXT_PUBLIC_CLIENT_BASE_HOST,
      BasePort: process.env.NEXT_PUBLIC_CLIENT_BASE_PORT,
    },
    posts: `${SERVICES.POSTS}/posts`,
    login: 'https://dummyjson.com/auth/login',
  },
  Method: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
  Header: {
    ContentType: 'Content-Type',
    ApplicationJson: 'application/json',
    Default: (token = '') => ({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    }),
    Authorization: () => ({
      // Authorization: "Bearer " + token,
      // "Content-Type": "multipart/form-data",
      // Accept: "application/json",
      'Content-Type': 'application/json',
    }),
    Type: {
      Json: 'json',
      File: 'file',
      formData: 'multipart/form-data',
    },
  },
  Default: {
    Error: 'Opps, an error occurred!',
  },
  StatusCode: {
    Successful: 200,
    Created: 201,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    ServerError: 500,
  },
  ErrorMessages: {
    Successful: 'Operation Successful!',
    BadRequest: 'Bad Request',
    Unauthorized: 'Unauthorized',
    Forbidden: 'Forbidden Resource',
    NotFound: 'Not Found',
    ServerError: 'Internal Server Error',
  },
};
export default NetworkConstants;
