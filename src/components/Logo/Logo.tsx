import styles from './Logo.module.scss';
import { ReactComponent as ShoppingListLogo } from '../../static/img/logo.svg';

const Logo: React.FC = () => {
    return (
        <div className={styles['c-logo']}>
            <h1><ShoppingListLogo /></h1>
        </div>
    );
};

export default Logo;
