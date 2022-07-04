import { useNavigate } from 'react-router-dom';

import './navigation.scss';

function Navigation() {
  const nav = useNavigate();
  return (
    <div className='nav-container'>
      <div onClick={() => nav(-1)} className='back-btn'></div>
      <div className='title'>Voting</div>
    </div>
  );
}

export default Navigation;