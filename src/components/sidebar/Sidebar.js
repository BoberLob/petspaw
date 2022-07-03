import './sidebar.scss';

function Sidebar() {
  const listElements = [
    {name: 'Voting'},
    {name: 'Breeds'},
    {name: 'Gallery'}
  ];

  const renderList = el => {
    return (
      <ul>
        {el.map(item => {
          return (
            <li key={item.name}>
              <a href={`/${item.name.toLowerCase()}`}>
                <div className={item.name.toLowerCase()}></div>
                <span>{item.name}</span>
              </a>
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