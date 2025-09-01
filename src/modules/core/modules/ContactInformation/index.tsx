import styles from './index.module.scss';

const ContactInformation = () => {
  return (
    <section className={styles.contactInformationWrapper}>
      <div className={styles.contactInformation}>
        <div>
          <h2>Contactgegevens</h2>
          <p>Monitorstraat 23, 1033 RM Amsterdam</p>
          <p>info@wittebouw.nl</p>
          <p>020 – 634 36 38</p>
          <a href="">
            <span>Neem contact op</span>
          </a>
        </div>
        <div>тут буде картаааааа</div>
      </div>
    </section>
  );
};

export default ContactInformation;
