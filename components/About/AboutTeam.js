import Image from 'next/image';
import Heading from '../Heading/Heading';
import styles from './AboutTeam.module.css'

const AboutTeam = () => {
  return (
    <section className='section'>
      <Heading
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
        title='Meet Our Creative Team'
        text='We make magic things happen'
      />
      <div className={`container container-center ${styles.team}`}>
        <div className={styles.item}>
          <div>
            <Image
              src='/images/team-1.webp'
              alt='designer'
              width={363}
              height={315}
            />
          </div>
          <div className={styles.heading}>
            <h5 className='heading-5'>Freddie Stewart</h5>
            <p>Lead Designer</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src='/images/team-2.webp'
            alt='designer'
            width={363}
            height={315}
          />
          <div className={styles.heading}>
            <h5 className='heading-5'>Cameron Butcher</h5>
            <p>Lead Product Manager</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src='/images/team-3.webp'
            alt='designer'
            width={363}
            height={315}
          />
          <div className={styles.heading}>
            <h5 className='heading-5'>Gabriel Woods</h5>
            <p>Lead Back-end Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam