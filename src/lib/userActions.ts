import { User } from '@/types/models';

export const viewUserProfile = (user: User) => {
  window.open('/user/' + user.userId, '_blank');
};
