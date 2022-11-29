import { useContext } from 'react';
import { MenuContext } from '../../../contexts/MenuContext';
import './Item.css';

export function Item(props) {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const handleNewMenuItem = (itemName) => {
    const newMenu = [ ...menuItems.items ];

    newMenu.push(itemName);

    setMenuItems({ items: newMenu });
  };

  return (
    <button className='menu-item' onClick={ () => handleNewMenuItem(props.title) }>
      <label>{ props.title }</label>
      <span>{ props.icon }</span>
    </button>
  );
}
