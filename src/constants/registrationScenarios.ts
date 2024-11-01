import RegistrationStages from '@/constants/enums/registrationStages';

export const PLANS = {
  BASIC: 'basic',
  BUSINESS_PLUS: 'business_plus',
  EXECUTIVE: 'executive',
  INDIVIDUAL: 'individual',
};
export const RegistrationScenarios: { [key: string]: string[] } = {
  [PLANS.BASIC]: [
    RegistrationStages.SELECT_PLAN,
    RegistrationStages.INITIAL_INFORMATION,
    RegistrationStages.BUSINESS,
    RegistrationStages.VERIFY_EMAIL,
  ],
  [PLANS.BUSINESS_PLUS]: [
    RegistrationStages.SELECT_PLAN,
    RegistrationStages.INITIAL_INFORMATION,
    RegistrationStages.BUSINESS,
    RegistrationStages.VERIFY_EMAIL,
    RegistrationStages.PAYMENT,
  ],
  [PLANS.EXECUTIVE]: [
    RegistrationStages.SELECT_PLAN,
    RegistrationStages.INITIAL_INFORMATION,
    RegistrationStages.BUSINESS,
    RegistrationStages.VERIFY_EMAIL,
    RegistrationStages.PAYMENT,
  ],
  [PLANS.INDIVIDUAL]: [
    RegistrationStages.SELECT_PLAN,
    RegistrationStages.INITIAL_INFORMATION,
    RegistrationStages.BUSINESS,
    RegistrationStages.VERIFY_EMAIL,
  ],
};
