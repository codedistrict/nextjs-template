import { BizProfile, Business, BusinessSocialMediaLinks } from '@/types/models';

export const getBusinessInfo = (business: Business | undefined): Business | undefined => {
  if (business) {
    return {
      address: {
        address1: business.addresses && business.addresses[0].address1,
        address2: business.addresses && business.addresses[0].address2,
        address3: business.addresses && business.addresses[0].address3,
        addressType: 'REG',
        addressZip: business.addresses && business.addresses[0].addressZip,
        city: business.addresses && business.addresses[0].city,
        country: business.addresses && business.addresses[0].country,
        fax: business.addresses && business.addresses[0].fax,
        phone: business.addresses && business.addresses[0].phone,
        province: business.addresses && business.addresses[0].province,
        region: business.addresses && business.addresses[0].region,
        subRegion: business.addresses && business.addresses[0].subRegion,
        url: business.addresses && business.addresses[0].url,
      },
      businessCarouselPictures: business.businessCarouselPictures,
      businessCertifications: business.businessCertifications,
      businessEntityType: business.businessEntityType,
      businessId: business.businessId,
      businessOwnershipType: business.businessOwnershipType,
      businessPicture: business.businessPicture,
      businessPresentationOption: business.businessPresentationOption,
      businessTagLine: business.businessTagLine,
      businessVideo: business.businessVideo,
      company: business.company,
      contacts: business.contacts,
      description: business.description,
      employees: business.employees,
      headquarters: business.headquarters,
      industries: business.industries,
      parentCompany: business.parentCompany,
      parentCountry: business.parentCountry,
      revenue: business.revenue,
      since: business.since,
      unit: business.unit,
    };
  }
};

export const getBusinessSocialLinks = (
  business: (Business & BusinessSocialMediaLinks) | undefined
): BusinessSocialMediaLinks | undefined => {
  if (business) {
    return {
      businessFacebook: business.businessFacebook,
      businessInstagram: business.businessInstagram,
      businessLinkedIn: business.businessLinkedIn,
      businessSnapchat: business.businessSnapchat,
      businessTwitter: business.businessTwitter,
    };
  }
};

export const getBizProfile = (
  business: (Business & BizProfile) | undefined
): BizProfile | undefined => {
  if (business) {
    return {
      businessActivity: business.businessActivity,
      businessContent: business.businessContent,
      businessEvents: business.businessEvents,
      businessId: business.businessId,
      businessProducts: business.businessProducts,
      businessServices: business.businessServices,
      businessTrade: business.businessTrade,
      businessViewDetail: business.businessViewDetail,
    };
  }
};
