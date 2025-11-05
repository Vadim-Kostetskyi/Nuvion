import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';
import ButtonLink from 'components/ButtonLink';
import { aboutNuvion, sections } from './data';
import styles from './index.module.scss';

// const team = [
//   {
//     name: 'Іван Петренко',
//     role: 'Генеральний директор',
//     img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80',
//   },
//   {
//     name: 'Олена Коваль',
//     role: 'Архітектор',
//     img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
//   },
//   {
//     name: 'Михаіл Сидоренко',
//     role: 'Інженер-будівельник',
//     img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80',
//   },
// ];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.aboutUs}>
      <section className={styles.introSection}>
        <div className={styles.introGrid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{`${t(
              'aboutUs.about'
            )} Nuvion B.V.`}</h1>
            {/* <p className={styles.textMargin}>{t('aboutUs.aboutNuvion1')}</p> */}
            <p className={styles.textMargin}>
              <Trans i18nKey="aboutUs.aboutNuvion1" />
            </p>
            {/* <p className={styles.textMargin}>{t('aboutUs.aboutNuvion2')}</p>
            <p className={styles.text}>{t('aboutUs.aboutNuvion3')}</p>
            <p className={styles.textMargin}>{t('aboutUs.aboutNuvion4')}</p>
            <p className={styles.text}>{t('aboutUs.aboutNuvion5')}</p>
            <p className={styles.text}>{t('aboutUs.aboutNuvion6')}</p>
            <p className={styles.text}>{t('aboutUs.aboutNuvion7')}</p>
            <p className={styles.text}>{t('aboutUs.aboutNuvion8')}</p> */}
            {/* <p className={styles.text}>
              <Trans i18nKey="aboutUs.aboutNuvion8" />
            </p> */}
            {aboutNuvion.map(({ title, items }) => (
              <>
                <h2 className={styles.titleS}>{t(`aboutUs.${title}`)}</h2>
                {items.map((item) => (
                  <p className={styles.text}>
                    <Trans i18nKey={`aboutUs.${item}`} />
                  </p>
                ))}
              </>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.detailsGrid}>
        {sections.map(({ Icon, title, items }, idx) => (
          <motion.div
            key={idx}
            className={styles.detailCard}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <Icon size={28} />
            </div>
            <h3>{t(`aboutUs.${title}`)}</h3>
            <ul>
              {items.map((i) => (
                <li key={i}>{t(`aboutUs.${i}`)}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
      <section className={styles.portfolioSection}>
        <motion.div
          className={styles.portfolioCard}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.icon}>
            <HardHat size={32} />
          </div>
          <h2>{t('aboutUs.portfolioAndRef')}</h2>
          <p>{t('aboutUs.portfolioAndRef1')}</p>
          <small>{t('aboutUs.portfolioAndRef2')}</small>
          <ButtonLink
            title={t('aboutUs.viewProjects')}
            link="/portfolio"
            className={styles.portfolioBtn}
          />
        </motion.div>
      </section>

      {/* <section className={styles.teamSection}>
        <h2>{t('aboutUs.ourTeam')}</h2>
        <p className={styles.subtitle}>{t('aboutUs.professionalsWho...')}</p>
        <div className={styles.teamGrid}>
          {team.map((m) => (
            <motion.article
              key={m.name}
              className={styles.teamCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.teamInfo}>
                <img
                  src={m.img}
                  alt={m.name}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
              <p className={styles.teamDesc}>
                Має значний досвід у сфері будівництва та впроваджує сучасні
                технології в кожен проєкт.
              </p>
            </motion.article>
          ))}
        </div>
      </section> */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <div>
            <h2>{t('aboutUs.ready...')}</h2>
            <p>{t('aboutUs.pleaseContactUs')}</p>
          </div>
          <ButtonLink
            title={t('feedBack.contactUs')}
            link="/#feedBack"
            className={styles.ctaBtn}
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
