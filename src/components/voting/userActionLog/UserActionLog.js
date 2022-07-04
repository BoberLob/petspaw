import { useState, useEffect } from 'react';

import usePetsPaw from '../../../services/PetsPaw';
import setContent from '../../../utils/setContent';

import './userActionLog.scss';

function UserActionLog() {
  const [data, setData] = useState(null);
  const {process, getVotes, clearError, setProcess} = usePetsPaw();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    clearError();
    getVotes()
      .then(setData)
      .then(() => setProcess('confirmed'));
  }

  return (
    <ul className='user-action-log'>
      {setContent(process, logItems, data)}
    </ul>
    // <ul className='user-action-log'>
    //   <li>
    //     <div className='time'>22:35</div>
    //     <div className='action'>Image ID: <span>ID1234567</span> was added to Favorites</div>
    //     <div className='logo fav'></div>
    //   </li>
    //   <li>
    //     <div className='time'>22:27</div>
    //     <div className='action'>Image ID: <span>HJd0XecNX</span> was added to Likes</div>
    //     <div className='logo like'></div>
    //   </li>
    //   <li>
    //     <div className='time'>22:21</div>
    //     <div className='action'>Image ID: <span>BbMFS3bU-</span> was added to Dislikes</div>
    //     <div className='logo dislike'></div>
    //   </li>
    //   <li>
    //     <div className='time'>21:56</div>
    //     <div className='action'>Image ID: <span>fQSunHvl8</span> was removed from Favourites</div>
    //     <div className='logo'></div>
    //   </li>
    // </ul>
  );
}

const logItems = ({data}) => {
  const log = data.map(item => {
    return (
      <li key={item.id}>
        <div className='time'>{item.time}</div>
        <div className='action'>Image ID: <span>{item.id}</span> was added to Favorites</div>
        <div className={`logo ${item.action === 1 ? 'like' : 'dislike'}`}></div>
      </li>
    )
  })
  return log;
}

export default UserActionLog;