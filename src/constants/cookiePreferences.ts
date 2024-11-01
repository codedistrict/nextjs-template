export const COOKIE_CONSENT_KEY = 'cookie_consent';
export const COOKIE_ESSENTIAL_KEY = 'cookie_essential';
export const COOKIE_PERFORMANCE_KEY = 'cookie_performance';
export const COOKIE_FUNCTIONAL_KEY = 'cookie_functional';

export const cookieKeys = {
  auth: 'auth',
};

export const Preferences = [
  {
    active: true,
    description:
      'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.    You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.',
    editable: false,
    key: COOKIE_ESSENTIAL_KEY,
    label: 'Essential Cookie',
  },
  {
    active: false,
    description:
      'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.    All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.',
    editable: true,
    key: COOKIE_PERFORMANCE_KEY,
    label: 'Performance Cookie',
  },
  {
    active: false,
    description:
      'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.    If you do not allow these cookies then some or all of these services may not function properly.',
    editable: true,
    key: COOKIE_FUNCTIONAL_KEY,
    label: 'Functional Cookie',
  },
];
