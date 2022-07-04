import './spinner.scss';

import spinner from '../../assets/spinner/spinner.svg';

function Spinner() {
  return (
    <img className='spinner' src={spinner} alt="Spinner" />
  );
}

export default Spinner;