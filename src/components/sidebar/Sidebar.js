import petBreeds from '../../assets/sidebar/pet-breeds.svg';
import voteTable from '../../assets/sidebar/vote-table.svg';
import imagesSearch from '../../assets/sidebar/images-search.svg'
import './sidebar.scss';

function Sidebar() {
  const listElements = [
    {name: 'Voting', pic: voteTable},
    {name: 'Breeds', pic: petBreeds},
    {name: 'Gallery', pic: imagesSearch}
  ];

  const renderList = el => {
    return (
      <ul>
        {el.map(item => {
          return (
            <li>
              <a href={`/${item.name.toLowerCase()}`}>
                <div className={item.name.toLowerCase()}>
                  <img src={item.pic} alt={item.name} />
                </div>
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