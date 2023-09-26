import styles from './List.module.scss';
import Item from '../Item';
import { ItemProps } from '../Item/Item.types';
import { ListProps } from './List.types';
import { useState } from 'react';

type ItemKey = keyof ItemProps;

const List: React.FC<ListProps> = ({
  items,
  onToggleItem,
  onDeleteItem,
  onClearItems,
}) => {

  const [sortBy, setSortBy] = useState('id-asc');
  const [key, order] = sortBy.split('-');

  const compareFunction = (a: ItemProps, b: ItemProps) => {
    if (key === 'description') {
      return order === 'asc'
        ? a.description.localeCompare(b.description)
        : b.description.localeCompare(a.description);
    } else {
      const c = Number(a[key as ItemKey]);
      const d = Number(b[key as ItemKey]);
      return order === 'asc' ? c - d : d - c;
    }
  };

  const sortedItems = items.toSorted(compareFunction);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className={styles['c-list']}>

      { items.length > 0 ? (

        <>

        <select value={sortBy} onChange={handleOnChange} className={styles.sort}>
          <option value='id-asc'>Sort by...</option>
          <option value='quantity-des'>🔽 Quantity</option>
          <option value='quantity-asc'>🔼 Quantity</option>
          <option value='description-des'>🔽 Description</option>
          <option value='description-asc'>🔼 Description</option>
          <option value='completed-des'>👍🏻 Completed</option>
          <option value='completed-asc'>👎🏻 Completed</option>
        </select>

        <ul className={styles.items}>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              {...item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              onClearItems={onClearItems}
            />
          ))}
        </ul>

        <button onClick={onClearItems} className={styles.clear}>Clear list</button>

        </>
      ) :
          <p className={styles.empty}>Your list is empty</p>
      }

    </div>
  );
};

export default List;
