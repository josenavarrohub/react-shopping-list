import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState(0);

  const date = new Date('august 13 2023');
  date.setDate(date.getDate() + days);

  const handleReset = () => {
    setStep(1);
    setDays(0);
  };

  return (
    <div className={styles['c-counter']}>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={e => setStep(Number(e.target.value))}
      />

      <div>
        <button onClick={() => setDays(days => days - step)}>-</button>
        <input value={days} onChange={e => setDays(Number(e.target.value))} />
        <button onClick={() => setDays(days => days + step)}>+</button>
      </div>

      <p>
        <span>
          {days === 0
            ? 'Today is '
            : days > 0
            ? `${days} days from today is `
            : `${Math.abs(days)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>

        { (step !== 1 || days !== 0) && (
            <button type="reset" onClick={handleReset}>
            Reset
            </button>
        )}
      </p>
    </div>
  );
};

export default Counter;
