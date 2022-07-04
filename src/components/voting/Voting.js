

import SearchPanel from '../searchPanel/SearchPanel';
import Navigation from '../navigation/Navigation';
import VotingPhoto from './votingPhoto/VotingPhoto';
import UserActionLog from './userActionLog/UserActionLog';

import './voting.scss';

function Voting() {
  return (
    <>
      <main>
        <SearchPanel />

        <div className='content'>
          <Navigation />
          <div className='voting-container'>
            <VotingPhoto />
            <UserActionLog />
          </div>
        </div>

      </main>
    </>  
  )
}

export default Voting;