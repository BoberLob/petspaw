const setContent = (process, Component, data) => {
  switch (process) {
    case 'waiting':
      return ;
    case 'loading': 
      return ;
    case 'confirmed':
      return <Component data={data}/>;
    case 'error':
      return new Error('Something went wrong!');
    default:
      throw new Error('Unexpected process state');
  }
}

export default setContent;