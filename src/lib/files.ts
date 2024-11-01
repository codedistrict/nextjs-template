import { deleteFile } from '@/lib/profile';
import { extractFileIdFromUrl } from '@/lib/utils';

export const deleteS3File = async (urlFromS3: string = '') => {
  try {
    const fileId = extractFileIdFromUrl(urlFromS3);

    if (fileId) await deleteFile(fileId);
  } catch (error) {
    console.error(error);
  }
};
