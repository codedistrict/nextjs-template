import dayjs from 'dayjs';

import {
  BuyerIntent,
  Contact,
  ProfilePreview,
  SocialMediaLinks,
  Subscription,
  User,
} from '@/types/models';

export const getContactInfo = (user: User | undefined): Partial<Contact> | undefined => {
  if (user) {
    return {
      about: user.about,
      backgroundImage: user.backgroundImage,
      counters: user.counters,
      country: user.country,
      created_at: user.created_at,
      fax: user.fax,
      firstName: user.firstName,
      guid: user.guid,
      isBusinessContact: user.isBusinessContact,
      jobFunction: user.jobFunction,
      jobTitle: user.jobTitle,
      lastName: user.lastName,
      middleInitial: user.middleInitial,
      noBackgroundImage: user.noBackgroundImage,
      phonenumber: user.phonenumber,
      picture: user.picture,
      province: user.province,
      state: user.state,
      suffix: user.suffix,
      title: user.title,
      userId: user.userId,
    };
  }
};

export const getSocialLinks = (user: User | undefined): Partial<SocialMediaLinks> | undefined => {
  if (user) {
    return {
      facebook: user.facebook,
      instagram: user.instagram,
      linkedin: user.linkedin,
      snapchat: user.snapchat,
      twitter: user.twitter,
    };
  }
};

export const getSubscription = (user?: User): Subscription | undefined => {
  if (user) {
    return {
      end_date: dayjs().format('MMMM DD, YYYY'), // format can be defined globally
      membershipType: user.membershipType,
      start_date: dayjs().format('MMMM DD, YYYY'),
    };
  }
};

export const getBuyerIntent = (user: User): BuyerIntent | undefined => {
  if (user) {
    return {
      interestedInProducts: user.interestedInProducts,
      interestedInServices: user.interestedInServices,
      productInterests: user.productInterests,
      serviceInterests: user.serviceInterests,
    };
  }
};

export const getProfilePreview = (user: User | undefined): ProfilePreview | undefined => {
  if (user) {
    return {
      viewActivity: user.viewActivity,
      viewChannel: user.viewChannel,
      viewContent: user.viewContent,
      viewDetail: user.viewDetail,
    };
  }
};
