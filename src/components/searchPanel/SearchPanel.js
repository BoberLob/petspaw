import like from '../../assets/search-panel/like-default.svg';
import favorite from '../../assets/search-panel/fav-default.svg';
import dislike from '../../assets/search-panel/dislike-default.svg';
import searchIcon from '../../assets/search-panel/search-icon.svg';
import './searchPanel.scss';

function SearchPanel() {

  return (
    <div className='search-panel-container'>
      <form className='search-form'>
        <input type="text" placeholder='Search for breeds by name' />
        <button typeof='button' className='icon'>
          <img src={searchIcon} alt="Search button" />
        </button>
      </form>
      <div className='icon likefavdis'>
        <img src={like} alt="Like button" />
      </div>
      <div className='icon likefavdis'>
        <img src={favorite} alt="Favorite button" />
      </div>
      <div className='icon likefavdis'>
        <img src={dislike} alt="Dislike button" />
      </div>
    </div>
  );
}

export default SearchPanel;