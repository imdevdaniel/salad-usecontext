import { MenuContext } from './contexts/MenuContext';
import { Home } from './components/containers/Home/Home';
import { useState } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState({ items: [] });

  return (
    <div>
      <MenuContext.Provider value={{ menuItems, setMenuItems }}>
        <Home />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
