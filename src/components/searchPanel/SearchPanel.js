import './searchPanel.scss';

const SearchPanel = () => {

  return (
    <div className='search-panel-container'>
      <form className='search-form'>
        <input type="text" placeholder='Search for breeds by name' />
        <button typeof='button' className='search-button' />
      </form>
      <div className='icon like'></div>
      <div className='icon fav'></div>
      <div className='icon dislike'></div>
    </div>
  );
}

export default SearchPanel;