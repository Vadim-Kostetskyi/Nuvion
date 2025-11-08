import inst from 'assets/svg/Instagram.svg';
// import tel from 'assets/svg/telegram.svg';
// import twit from 'assets/svg/twitter.svg';
import styles from './index.module.scss';

const Social = () => (
  <div className={styles.social}>
    <img src={inst} alt="" loading="lazy" />
    <img src={inst} alt="" loading="lazy" />
    <img src={inst} alt="" loading="lazy" />
    {/* <img src={tel} alt="" />
    <img src={twit} alt="" /> */}
    {/* <img src={inst} alt="" />  */}
  </div>
);

export default Social;
