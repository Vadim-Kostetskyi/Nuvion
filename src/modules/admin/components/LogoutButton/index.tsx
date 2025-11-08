import { useNavigate } from 'react-router-dom';
import logoutIcon from 'assets/icons/logout-24.png';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    navigate('/login', { replace: true });
  };

  return (
    <button onClick={handleLogout}>
      <img src={logoutIcon} alt="Logout Button" loading="lazy" />
    </button>
  );
};

export default LogoutButton;
