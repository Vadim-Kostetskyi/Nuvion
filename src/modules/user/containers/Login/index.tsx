import LoginForm from 'modules/user/components/LoginForm';
import styles from './index.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.formBox}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
