import { useState } from 'react';
import { StepsProps } from './StepsTypes';
import styles from './Steps.module.scss';

const Steps: React.FC<StepsProps> = ({ messages }) => {
  // State variables
  const [active, setActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Event handler functions
  const handlePrevious = () => {
    if (active > 1) setActive(active => active - 1);
  }
  const handleNext = () => {
    if (active < messages.length) setActive(active => active + 1);
  }
  const handleOpen = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <>
      <button className={styles.close} onClick={handleOpen}>&times;</button>

      { isOpen && (
        <div className={styles['c-steps']}>
          <div className={styles.numbers}>
            <div className={active >= 1 ? 'active' : ''}>1</div>
            <div className={active >= 2 ? 'active' : ''}>2</div>
            <div className={active >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className={styles.message}>{messages.at(active - 1)}</p>

          <div className={styles.buttons}>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
