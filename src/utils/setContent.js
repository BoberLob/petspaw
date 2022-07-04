import Spinner from "../components/spinner/Spinner";

const setContent = (process, Component, data) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading': 
      return <Spinner />;
    case 'confirmed':
      return <Component data={data}/>;
    case 'error':
      return new Error('Something went wrong!');
    default:
      throw new Error('Unexpected process state');
  }
}

export default setContent;