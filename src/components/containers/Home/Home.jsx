import './Home.css';
import { Item } from '../../common/Item/Item';
import { useContext } from 'react';
import { MenuContext } from '../../../contexts/MenuContext';
import { Items } from '../../../mocks/items-mock';

export function Home() {
  const availableOptions = Items;

  const { menuItems, setMenuItems } = useContext(MenuContext);

  return (
    <div className='home'>
      <nav>
        <p>Welcome, UserTest</p>
      </nav>

      <hr />

      <div className='salad-options'>
        {
          availableOptions.map((option, index) => {
            return (
              <Item key={ index } title={ option.title } icon={ option.icon }/>
            )
          })
        }
      </div>

      <div className='current-menu'>
        { menuItems.items.map((item, index) => <div key={ index }>{ item }</div>) }
      </div>
    </div>
  );
}
