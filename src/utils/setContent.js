import Spinner from "../components/spinner/Spinner";

const setContent = (process, Component, data, spinner = true) => {
  switch (process) {
    case 'waiting':
      return spinner ? <Spinner /> : null;
    case 'loading': 
      return spinner ? <Spinner /> : null;
    case 'confirmed':
      return <Component data={data}/>;
    case 'error':
      return new Error('Something went wrong!');
    default:
      throw new Error('Unexpected process state');
  }
}

export default setContent;