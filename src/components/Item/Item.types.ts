export interface ItemProps {
    id: number;
    description: string;
    quantity: number;
    completed: boolean;
    onToggleItem?: (id: number) => void;
    onDeleteItem?: (id: number) => void;
    onClearItems?: () => void;
}
