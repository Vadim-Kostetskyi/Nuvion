import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormProps } from 'modules/core/modules/FeedBack/data';
import { Form } from 'modules/core/modules/FeedBack';
import styles from './index.module.scss';

interface InputFeedbackProps extends FormProps {
  errors?: FieldErrors<Form>;
  register: UseFormRegister<Form>;
  require?: boolean;
}

const InputFeedback: FC<InputFeedbackProps> = ({
  title,
  name,
  type,
  errors,
  register,
  isTextarea,
  require,
}) => (
  <div className={styles.inputBox}>
    <label>
      <h5>{title}</h5> {require && <span>*</span>}
      {!isTextarea ? (
        <input
          {...register(name, { required: true })}
          className={styles.input}
          type={type}
        />
      ) : (
        <textarea
          {...register(name, { required: true })}
          className={styles.input}
          cols={30}
          rows={10}
        />
      )}
      {errors && errors[name] ? (
        <p className={errors && errors[name] ? styles.error : styles.notError}>
          Please enter your {title}
        </p>
      ) : null}
    </label>
  </div>
);

export default InputFeedback;
