import axios from "axios";

const getMusicService = axios.get({
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: 'love', locale: 'en-US', offset: '0', limit: '5'},
    headers: {
        'x-rapidapi-key': 'dd37132ac3msh987ba4553561008p12ba0djsn3a15ebd3c06f',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
})
  .then(function (response) {
    // handle success
    console.log(response);
    alert('secces')
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    alert('Error')
  })


export const getMusic = () => {
    return async dispatch => {
        const { data } = await getMusicService(data);
        await dispatch({type:'INIT', payload:data})
    }
}