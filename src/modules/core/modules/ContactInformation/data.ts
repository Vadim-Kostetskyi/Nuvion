import locationIcon from 'assets/icons/1-1-150x150.png';
import mailIcon from 'assets/icons/2-1-150x150.png';
import phoneIcon from 'assets/icons/3-1-150x150.png';
import { email, phoneNumber } from 'utils/constants';

export const contactDetails = [
  {
    icon: locationIcon,
    label: 'address',
  },
  {
    icon: mailIcon,
    label: email,
  },
  {
    icon: phoneIcon,
    label: phoneNumber,
  },
];
