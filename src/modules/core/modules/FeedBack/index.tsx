import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import InputFeedback from 'modules/core/components/InputFeedback';
import { useFormProps } from './data';
import 'react-toastify/dist/ReactToastify.css';
import { nameProps } from 'utils/constants';
import Map from '../Map';
import { useWindowWidth } from 'utils/windowWidth';
import styles from './index.module.scss';

export interface Form {
  name: string;
  lastName: string;
  email: string;
  message: string;
  phoneNumber: string;
}
const FeedBack = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { formProps, titleProps } = useFormProps();

  const { t } = useTranslation();
  const width = useWindowWidth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const sendEmail: SubmitHandler<Form> = () => {
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setIsLoading(false);
            toast.success(t('toastify.success'));
            reset();
          },
          (error) => {
            setIsLoading(false);
            toast.error(t('toastify.error'));
            console.log('FAILED...', error);
          }
        );
    }
  };

  return (
    <section className={styles.feedBack} id="feedBack">
      <h2>{titleProps.title}</h2>
      <div>
        {width <= 660 ? <Map /> : null}
        <form
          className={styles.form}
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            {formProps.map((props, index) => (
              <InputFeedback
                {...props}
                register={register}
                errors={errors}
                key={index}
              />
            ))}
          </div>
          <label>
            <h5>{t('feedBack.message')}</h5>
            <textarea
              {...register(nameProps.message, { required: true })}
              className={styles.input}
              cols={30}
              rows={10}
            />
          </label>
          <div className={styles.submitBox}>
            <input
              className={isLoading ? styles.buttonLoad : styles.button}
              type="submit"
              disabled={isLoading}
              value={t('feedBack.send')}
            />
            {isLoading && <div className={styles.loader}></div>}
          </div>
        </form>
        {width > 660 ? <Map /> : null}
      </div>
      <ToastContainer />
    </section>
  );
};

export default FeedBack;
