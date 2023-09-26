import FooterProps from "./Footer.types";
import styles from './Footer.module.scss';

const Footer: React.FC<FooterProps> = ({items}) => {
    // Derived state (from App)
    const totalItems = items.length;
    const completedItems = items.filter(item => item.completed).length;
    const percentage = Math.round(completedItems * 100 / totalItems);

    return (
        <footer className={styles['c-footer']}>
            {totalItems} items
            {totalItems > 0 && (
                <span className={styles.completed}>
                    ({percentage} % completed {percentage === 100 ? '🏆' : null})
                </span>
            )}
        </footer>
    );
};

export default Footer;
