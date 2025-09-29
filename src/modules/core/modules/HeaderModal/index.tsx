import { FC } from 'react';
import HeaderNav from '../HeaderNav';
import HeaderLogo from 'modules/core/components/HeaderLogo';
import Cross from 'assets/svg/Cross';
import styles from './index.module.scss';

interface HeaderModalProps {
  onClose: () => void;
}

const HeaderModal: FC<HeaderModalProps> = ({ onClose }) => {
  return (
    <div className={styles.headerModal}>
      <div className={styles.top}>
        <HeaderLogo />
        <button className={styles.closeBtn} onClick={onClose}>
          <Cross />
        </button>
      </div>
      <nav>
        <HeaderNav isMobile={true} />
      </nav>
    </div>
  );
};

export default HeaderModal;
