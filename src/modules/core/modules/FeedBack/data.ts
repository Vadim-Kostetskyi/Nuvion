import { useTranslation } from 'react-i18next';
import { nameProps } from 'utils/constants';

export type FormProps = {
  name:
    | nameProps.name
    | nameProps.email
    | nameProps.phoneNumber
    | nameProps.lastName;
  title: string;
  type?: string;
  isTextarea?: boolean;
  require?: boolean;
};

export const useFormProps = () => {
  const { t } = useTranslation();

  const formProps: FormProps[] = [
    {
      title: t('feedBack.name'),
      name: nameProps.name,
      type: 'text',
      require: true,
    },
    {
      title: t('feedBack.email'),
      name: nameProps.email,
      type: 'email',
      require: true,
    },
    {
      title: t('feedBack.phoneNumber'),
      name: nameProps.phoneNumber,
      type: 'text',
    },
  ];

  const titleProps = {
    title: t('feedBack.contactUs'),
  };

  return { formProps, titleProps };
};
