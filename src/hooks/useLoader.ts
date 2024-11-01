import { useState } from 'react';

const defaultErrorHandler = (error: Error) => {
  console.log(error);
  // TODO: It should trigger a notification
};

export const useLoader = (
  uploadAction: Function,
  loaderSetter?: Function,
  errorHandler: Function = defaultErrorHandler
) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = loaderSetter || setIsLoading;

  const action = async (...params: any) => {
    setLoading(true);
    let response: any;

    try {
      response = await uploadAction(...params);
    } catch (error) {
      response = await errorHandler(error);
    }

    setLoading(false);
    return response;
  };

  return {
    action,
    isLoading: isLoading,
    setIsLoading: setLoading,
  };
};
