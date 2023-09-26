import { ItemProps as Item } from '../Item/Item.types';

export interface ListProps {
    items: Item[];
    onToggleItem: (id: number) => void;
    onDeleteItem: (id: number) => void;
    onClearItems: () => void;
}
