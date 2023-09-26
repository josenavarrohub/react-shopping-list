import React, { useState } from 'react';
import { ItemProps as Item } from '../Item/Item.types';
import Wrapper from '../Wrapper';
import Logo from '../Logo';
import Form from '../Form';
import List from '../List';
import Footer from '../Footer';
import itemsDemo from '../../data/items-demo-data';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(itemsDemo);

  const handleAddItem = (item: Item) => {
    setItems(items => [...items, item]);
  };

  const handleToggleItem = (id: number) => {
    setItems(items => 
      items.map(item => 
        item.id === id ? {...item, completed: !item.completed} : item
      )
    );
  };

  const handleDeleteItem = (id: number) => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleClearItems = () => {
    if (!window.confirm('Are you sure you want to clear the list?')) return;
    setItems([]);
  };
  
  return (
    <Wrapper>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </Wrapper>
  );
};

export default App;
