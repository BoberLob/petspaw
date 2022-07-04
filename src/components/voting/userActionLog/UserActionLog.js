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