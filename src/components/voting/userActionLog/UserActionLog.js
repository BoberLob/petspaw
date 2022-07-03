import './userActionLog.scss';

function UserActionLog() {
  return (
    <ul className='user-action-log'>
      <li>
        <div className='time'>22:35</div>
        <div className='action'>Image ID: <span>ID1234567</span> was added to Favorites</div>
        <div className='logo fav'></div>
      </li>
      <li>
        <div className='time'>22:27</div>
        <div className='action'>Image ID: <span>HJd0XecNX</span> was added to Likes</div>
        <div className='logo like'></div>
      </li>
      <li>
        <div className='time'>22:21</div>
        <div className='action'>Image ID: <span>BbMFS3bU-</span> was added to Dislikes</div>
        <div className='logo dislike'></div>
      </li>
      <li>
        <div className='time'>21:56</div>
        <div className='action'>Image ID: <span>fQSunHvl8</span> was removed from Favourites</div>
        <div className='logo'></div>
      </li>
    </ul>
  );
}

export default UserActionLog;