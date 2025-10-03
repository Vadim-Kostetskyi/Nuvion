import { useNavigate } from 'react-router-dom';
import logoutIcon from 'assets/icons/logout-24.png';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Видаляємо токен з localStorage і sessionStorage
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    // Якщо є інші дані користувача — теж очищаємо
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Перекидуємо на логін
    navigate('/login', { replace: true });
  };

  return (
    <button onClick={handleLogout}>
      <img src={logoutIcon} alt="Logout Button" />
    </button>
  );
};

export default LogoutButton;
