import { NavLink } from 'react-router-dom';

import './sidebar.scss';

function Sidebar() {
  const listElements = ['voting', 'breeds', 'gallery'];

  const renderList = el => {
    return (
      <ul>
        {el.map(item => {
          return (
            <li key={item}>
              <NavLink className={({isActive}) => isActive ? 'active' : undefined} to={`/${item}`}>
                <div className={item}></div>
                <span>{item}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <aside>
      <h2>Hi intern!</h2>
      <p>Welcome to MI 2022 Front-end test</p>
      <h3>Let's start using The Cat API</h3>
      {renderList(listElements)}
    </aside>
  );
}

export default Sidebar;