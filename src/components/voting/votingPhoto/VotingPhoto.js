import './votingPhoto.scss';

import cat from '../../../assets/voting/cat.jpg';

function VotingPhoto() {
  return (
    <>
      <img className='voting-photo' src={cat} alt="cat-id" />

      <div className='voting-btns-container'>
        <div className='vote-like'></div>
        <div className='vote-fav'></div>
        <div className='vote-dislike'></div>
      </div>
    </>
  );
}

export default VotingPhoto;