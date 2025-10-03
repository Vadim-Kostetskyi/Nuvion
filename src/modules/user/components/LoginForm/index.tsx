import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './index.module.scss';
import { useLoginMutation } from 'storeRedux/slyse/login';

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const key = import.meta.env.VITE_API_KEY;

  const [loginUser, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const onLoginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const login = formData.get('username') as string;
    const password = (formData.get('password') + key) as string;
    const rememberMe = formData.get('rememberMe') === 'on';

    try {
      const data = await loginUser({ login, password }).unwrap();

      if (data.token) {
        if (rememberMe) {
          localStorage.setItem('token', data.token);
        } else {
          sessionStorage.setItem('token', data.token);
        }
        // navigate('/dashboard');
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h1>{t('login.login')}</h1>
      <form onSubmit={onLoginUser} className={styles.form}>
        <label htmlFor="username">
          {t('login.usernameOrEmailAddress')} <span>*</span>
        </label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">
          {t('login.password')} <span>*</span>
        </label>
        <input type="password" id="password" name="password" required />

        <div className={styles.checkbox}>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">{t('login.rememberMe')}</label>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? t('login.loading') : t('login.logInToSystem')}
        </button>

        {error && <p className={styles.error}>{t('login.failed')}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
