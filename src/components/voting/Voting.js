import Navigation from '../navigation/Navigation';
import VotingPhoto from './votingPhoto/VotingPhoto';
import UserActionLog from './userActionLog/UserActionLog';

import './voting.scss';

function Voting() {
  return (
    <>
      <Navigation title='Voting' />
      <div className='voting-container'>
        <VotingPhoto />
        <UserActionLog />
      </div>
    </>    
  )
}

export default Voting;