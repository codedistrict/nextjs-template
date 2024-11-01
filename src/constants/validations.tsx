export const FIELD_LENGTHS = {
  EMPLOYEE: 999999999,
  GENERAL: 63,
  LONG: 200,
  PHONE: 15,
  POSTAL_CODE: 5,
  PRODUCT_NAME: 170,
  REVENUE: 99999999999,
  SHORT: 20,
};

export const PATTERNS = {
  ALL_WITHOUT_SPECIAL: /^[^{}"#$%[\]!@=?|\/\\^*+]*$/,
  DIGITS_ONLY: /^[0-9]+$/,
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  INDUSTRY: /^[A-Za-z0-9(),+_\-.'"\s]+$/i,
  NO_PHONE_PREFIX: /^(?!\+)/,
  PASSWORD: /^(?=.*\d)(?=.*[\?\!\[\]\@\#])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  PHONE:
    /^(\+?\d{1,3}\s?)?((\(\d{1,3}\)\s?)|(\d{1,4})([ -.]?)?)(\d{2,4}([ -.]?))(\d{4})([ ;]?(([E|e]xt[:|.|]?)|x|X)(\s?\d{1,5}))?$/,
  POSTAL_CODE: /^[A-Z0-9 -]*$/i,
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
};
