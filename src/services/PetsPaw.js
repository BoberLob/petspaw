import useHttp from "../hooks/http.hook";

const usePetsPaw = () => {
  const {request, clearError, process, setProcess} = useHttp();

  const _apiBase = 'https://api.thecatapi.com/v1/';
  const _apiKey = '?api_key=48590d6e-8781-4957-a99d-4ce5410ff12c'

  const getVotingData = async () => {
    const res = await request(`${_apiBase}images/search?size=full&limit=1${_apiKey}`);
    return _transformVotingData(res[0]);
  }

  const getVotes = async () => {
    const res = await request(`${_apiBase}votes${_apiKey}`);
    
    return _transformVotes(res);
  }

  const postVotes = async (id, action, vote) => {
    const data = {image_id: id, sub_id: action, value: vote};
    const res = await request(`${_apiBase}votes${_apiKey}`, 'POST', JSON.stringify(data))
    return res;
  }

  const _transformVotingData = (data) => {
    return {
      id: data.id,
      url: data.url
    }
  }

  const _transformVotes = (data) => { 
    return data.map(item => ({id: item.image_id, action: item.value, time: Date.parse(item.created_at)}))
                .sort((a, b) => b.time - a.time)
                .slice(0, 10)
                .map(item => ({id: item.id, action: item.action, time: getTime(item.time)}));
  }

  const getZero = value => value.toString().length === 1 ? `0${value}` : value;

  const getTime = value => {
    const hours = new Date(value).getHours(),
          minutes = new Date(value).getMinutes();

    return `${getZero(hours)}:${getZero(minutes)}`;
  }

  return {
    process,
    setProcess,
    clearError,
    getVotingData,
    getVotes,
    postVotes
  }
}

export default usePetsPaw;