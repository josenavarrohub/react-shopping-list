import { ItemProps } from './Item.types';
import styles from './Item.module.scss';

const Item: React.FC<ItemProps> = ({
    id,
    description,
    quantity,
    completed,
    onToggleItem,
    onDeleteItem
}) => {
    return (
        <li className={`${styles['c-item']} ${completed ? styles.completed : ''}`}>
            <label className={styles.label}>
                <input
                    className={styles.completed}
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggleItem?.(id)}
                />
                <span className={styles.quantity}>{quantity}</span>
                <span className={styles.description}>{description}</span>
            </label>
            <button
                className={styles.delete}
                onClick={() => onDeleteItem?.(id)}
            >
                &times;
            </button>
        </li>
    );
};

export default Item;
