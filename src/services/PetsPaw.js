import useHttp from "../hooks/http.hook";

const usePetsPaw = () => {
  const {request, clearError, process, setProcess} = useHttp();

  const _apiBase = 'https://api.thecatapi.com/v1/';

  const getVotingData = async () => {
    const res = await request(`${_apiBase}images/search?size=med&limit=1`);
    return _transformVotingData(res[0]);
  }

  const _transformVotingData = (data) => {
    return {
      id: data.id,
      url: data.url
    }
  }

  return {
    process,
    setProcess,
    clearError,
    getVotingData
  }
}

export default usePetsPaw;