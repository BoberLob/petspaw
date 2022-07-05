import { useState, useEffect } from 'react';

import usePetsPaw from '../../../services/PetsPaw';
import setContent from '../../../utils/setContent';

import './votingPhoto.scss';

const VotingPhoto = () => {

  const [data, setData] = useState(null);

  const {process, getVotingData, postVotes, clearError, setProcess} = usePetsPaw();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    clearError();
    getVotingData()
      .then(setData)
      .then(() => setProcess('confirmed'));
  }

  const voteAction = (id, action, vote) => {
    postVotes(id, action, vote);
    getData();
  }

  const viewPhoto = ({data}) => {
    const {url} = data;
    return (
      <>
      <div className='photo-container'>
        <img className='voting-photo' src={url} alt="cat-id" />
      </div>
      <div className='voting-btns-container'>
        <div onClick={() => voteAction(data.id, 'like', 1)} className='vote-like'></div>
        <div className='vote-fav'></div>
        <div onClick={() => voteAction(data.id, 'dislike', 0)} className='vote-dislike'></div>
      </div>
      </>
    )
  }

  return (
    setContent(process, viewPhoto, data)
  );
}

export default VotingPhoto;