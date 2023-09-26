import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.type';

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return (
        <main className={styles['c-wrapper']}>
            <div className={styles.children}>
                {children}
            </div>
        </main>
    );
};

export default Wrapper;
