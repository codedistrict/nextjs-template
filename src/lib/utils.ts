import { Area } from 'react-easy-crop';

import { cookieKeys } from '@/constants/cookiePreferences';
import { Province, Provinces } from '@/lib/location';

import { getaCookie } from './cookies';

export function Capitalize(value: string): string {
  let newValue = value
    .split(' ')
    .map((d: string) => d.charAt(0).toUpperCase() + d.slice(1))
    .join(' ');
  return newValue;
}

export function getCountryName(countryId: string, t: Function): string {
  if (!countryId) return '';

  return t(`common:countries.${countryId}`, null, {
    default: countryId || '',
  });
}

export function getStateName(stateId: string, t: Function): string {
  if (!stateId) return '';

  return t(`common:states.${stateId}`, null, {
    default: stateId || '',
  });
}

export function getStatesFromCountryId(countryId: string, statesMap?: Provinces): Province[] {
  if (!countryId || !statesMap) return [];

  const countryStates =
    statesMap && statesMap[countryId]?.length > 0
      ? statesMap[countryId].sort((state1, state2) => state1.name.localeCompare(state2.name))
      : [];

  return countryStates;
}

export function ScrollToTop() {
  setTimeout(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, 0);
}

export const getImageFromUrl = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', reject);
    image.src = url;
  });
};

export const getBlobFromCanvas = (canvas: HTMLCanvasElement, file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob: any) => {
      if (blob) {
        blob.name = file.name;
        blob.lastModified = file.lastModified;
        resolve(blob);
      } else {
        reject(new Error('Canvas is empty'));
      }
    }, file.type);
  });
};

export const cropImage = async (imageUrl: string, file: File, crop: Area) => {
  const image: HTMLImageElement = await getImageFromUrl(imageUrl);
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const ctx = canvas.getContext('2d');

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx?.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return await getBlobFromCanvas(canvas, file);
};

export const extractFileIdFromUrl = (fileUrl: string = '') => {
  const fileName = fileUrl.split('%2F').pop();
  const fileId = fileName?.split('.').shift();

  return fileId;
};

export const uuid = () => {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

export const truncate = (str: string, num: number) => {
  if (str.length <= num || num === 0) {
    return str;
  }
  return str.slice(0, num) + '...';
};

export const escapeNewLine = (str?: string) => {
  return str ? str.replace(/[\\]*\\n/g, '\n') : str;
};

export const isServer = () => {
  return typeof window === 'undefined' && typeof global !== 'undefined';
};

export const isUserAuthenticated = () => {
  const userCookie = getaCookie(cookieKeys.auth);

  // Check userCookie is a string and not undefined
  if (typeof userCookie === 'string') {
    const user = JSON.parse(userCookie);
    return !!user?.token;
  }
};
