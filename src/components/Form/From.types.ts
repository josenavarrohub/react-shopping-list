import { ItemProps as Item } from '../Item/Item.types';

export interface FormProps {
    onAddItem: (item: Item) => void;
}
