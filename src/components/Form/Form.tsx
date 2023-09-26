import { useState } from 'react';
import styles from './Form.module.scss';
import { FormProps } from './From.types';

const Form: React.FC<FormProps> = ({onAddItem}) => {
    const QUANTITIES = Array.from({length: 20}, (_, i) => i + 1);
    
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState('');

    const handleQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(event.target.value));
    };

    const handleDescription =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const resetForm = () => {
        setQuantity(1);
        setDescription('');
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!description) return alert('Introduce an item');
        onAddItem({ id: Date.now(), description, quantity, completed: false });
        resetForm();
    };

    return (
        <form className={styles['c-form']} onSubmit={handleSubmit}>
            <select
                className={styles.select}
                value={quantity}
                onChange={handleQuantity}
            >
                {QUANTITIES.map(quantity => (
                    <option key={quantity} value={quantity}>
                        {quantity}
                    </option>
                ))}
            </select>

            <input
                className={styles.input}
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescription}
            />
            
            <button className={styles.button}>Add item</button>
        </form>
    );
};

export default Form;
