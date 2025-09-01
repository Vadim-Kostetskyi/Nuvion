import photo from 'assets/20231013_161555crop-480x480.jpg';
import styles from './index.module.scss';

const Representation = () => {
  return (
    <section className={styles.representation}>
      <div>
        <div className={styles.imageWrapper}>
          <img src={photo} alt="" />
        </div>
        <div>
          <h2>Even voorstellen</h2>
          <strong>
            Witte Bouw is al decennialang gespecialiseerd in gebouw onderhoud,
            restaureren, bouwen en renoveren van kleinere panden tot
            (rijks-)monumenten in Amsterdam en omstreken.
          </strong>
          <p>
            Kwaliteit en vakkennis staat daarbij altijd op de eerste plaats. Wij
            behoren tot een selecte groep experts die het certificaat ‘Erkend
            Restauratie Bouwbedrijf’ mogen voeren en hebben al talloze
            monumentale gebouwen onder handen genomen.
          </p>
          <p>
            Onze opdrachtgevers zijn uiteenlopend. Van VvE’s, tot
            (semi-)overheidsinstellingen, woningbouwcorporaties, beleggers,
            beheerders van scholen, bedrijven of particulieren.{' '}
          </p>
        </div>
        <div>
          <p>
            Ook werken we vaak in opdracht van architectenbureaus, constructeurs
            of stedenbouwkundigen.
          </p>
          <p>
            We doen meer dan alleen mooie bouwprojecten uitvoeren. Onze
            medewerkers hebben liefde voor het vak en oog voor detail. We bouwen
            op elkaar en lachen veel, creëren oplossingen en zijn proactieve
            meedenkers. We maken realistische plannen, heldere kostenopgaves en
            communiceren graag duidelijk.
          </p>
          <p>
            Wilt u meer weten over ons bedrijf? Klik dan op de button hieronder.
          </p>
          <a href="#">
            <span>Meer over Witte Bouw</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Representation;
