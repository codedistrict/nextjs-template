import Image from 'next/image';

// import { SubscriptionPlan } from "@/components/Registration/types";

export const SubscriptionPlans = [
  {
    planName: <>Business Basic</>,
    price: 0,
    type: 'basic',
  },
  {
    icon: (
      <Image
        alt="Business Plus"
        src="/images/icon-business-plus.svg"
        width={20}
        height={33}
      ></Image>
    ),
    planName: (
      <>
        Business <span className="font-bold">Plus</span>
      </>
    ),
    price: 7.99,
    type: 'business_plus',
  },
  {
    planName: <>Individual</>,
    price: 0,
    type: 'individual',
  },
  {
    icon: <Image alt="Executive" src="/images/icon-executive.svg" width={23} height={32}></Image>,
    planName: <span className="font-bold">Executive</span>,
    price: 5.99,
    type: 'executive',
  },
];
