// TODO for now keeping flat json in S3 bucket. Have to think about later as discussed with Marko to return it from API
export const fetchIndustryCategories = async () => {
  const resp = await fetch(`${process.env.CLASSIFICATION_URL}/industry-classification.json`);
  const respData: any = await resp.json();

  return respData.reduce((acc: any, item: any) => {
    acc[item.globalid] = item;
    return acc;
  }, {});
};

export const fetchProductTypeCategories = async () => {
  const resp = await fetch(`${process.env.CLASSIFICATION_URL}/product-classification.json`);
  const respData: any = await resp.json();

  return respData.reduce((acc: any, item: any) => {
    acc[item.globalid] = item;
    return acc;
  }, {});
};

export const fetchServiceTypeCategories = async () => {
  const resp = await fetch(`${process.env.CLASSIFICATION_URL}/service-classification.json`);
  const respData: any = await resp.json();

  return respData.reduce((acc: any, item: any) => {
    acc[item.globalid] = item;
    return acc;
  }, {});
};
