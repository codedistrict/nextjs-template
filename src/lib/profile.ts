import { SERVICES } from '@/constants/services';
import { fetcher, FileAPIResponse, fileS3Uploader } from '@/lib/https';
import { FileSignedUpResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';
const SIGN_FILES_URI = 'api/v1/files/signed-url';
const DELETE_FILES_URI = 'api/v1/files/';

export type signedUpBodyType = {
  fileName: string;
  fileSize: number;
};

/**
 * Create a URL which will be used to upload the file to S3
 * @param payload. Object with the file name and fileSize
 *
 *  Notes: - "fileName" should have the file extension.
 *         - Supported extensions:
 *             Images: .png, .jpg, .jpeg, .tiff, .webp, .svg, .heif
 *             Documents: .doc, .docx, .odt, .txt, .pdf, .xls, .xlsx, .ppt, .pptx
 *             Videos: .mp4, .m4v, .mov, .webm, .mkv, .avi, .wmv
 * @return parameters to upload File to S3
 */
export async function getFileSignedUrl(payload: signedUpBodyType): Promise<FileSignedUpResponse> {
  return fetcher(SERVICES.FILES, MethodTypes.POST, SIGN_FILES_URI, payload);
}

/**
 * Upload the file to S3
 * @param payload. Object with the file name and fileSize
 * @return fileDownloadUrl
 */
export async function uploadFileToS3(fileToUpload: File): Promise<FileAPIResponse> {
  const { name, size } = fileToUpload;

  const signData = {
    fileName: name,
    fileSize: size,
  };

  const presignedPostUrl = await getFileSignedUrl(signData);

  return fileS3Uploader(presignedPostUrl, fileToUpload);
}

/**
 * Delete the file from S3
 * @param fileId. S3 File Id
 * Notes: The file Id is the name of the file without its extension
 */
export async function deleteFile(fileId: string): Promise<any> {
  return fetcher(SERVICES.FILES, MethodTypes.DELETE, DELETE_FILES_URI + fileId);
}
