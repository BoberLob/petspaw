import { useState, useEffect } from 'react';

import usePetsPaw from '../../../services/PetsPaw';
import setContent from '../../../utils/setContent';

import './votingPhoto.scss';

function VotingPhoto() {

  const [data, setData] = useState(null);

  const {process, getVotingData, clearError, setProcess} = usePetsPaw();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    clearError();
    getVotingData(Math.floor(Math.random() * 1000000000))
      .then(setData)
      .then(() => setProcess('confirmed'));
  }

  return (
    <>
      <div className='photo-container'>
        {setContent(process, viewPhoto, data)}
      </div>

      <div className='voting-btns-container'>
        <div onClick={getData} className='vote-like'></div>
        <div className='vote-fav'></div>
        <div onClick={getData} className='vote-dislike'></div>
      </div>
    </>
  );
}

const viewPhoto = ({data}) => {
  const {url} = data;
  return <img className='voting-photo' src={url} alt="cat-id" />
}

export default VotingPhoto;