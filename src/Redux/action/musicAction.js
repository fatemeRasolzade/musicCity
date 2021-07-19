import axios from "axios"

export const getMusics =()=> async (dispatch) =>{

  return await axios('https://shazam.p.rapidapi.com/search',{
      method:"GET",
      params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
      headers: { 'x-rapidapi-key': '4385283c2fmsh9a6bb0c1faacea3p1bb68ejsn10bf64bd4446',
                 'x-rapidapi-host': 'shazam.p.rapidapi.com' },
      // data : JSON.stringify(data)
      })
      .then(res=>{
          dispatch({type : 'INIT', payload : res.data})
          let firstItem = res.data.tracks.hits[0].track
          dispatch(getInfoOfMusic(firstItem))
          return true
      })
      .catch(error=>{
          console.log("Error");
          return false
      })
}

export const getInfoOfMusic =(track)=> async (dispatch) =>{

  return await axios('https://shazam.p.rapidapi.com/search',{
      method:"GET",
      params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
      headers: {
        'x-rapidapi-key': 'dd37132ac3msh987ba4553561008p12ba0djsn3a15ebd3c06f',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      },
      // data : JSON.stringify(data)
      })
      .then(res=>{
          
          dispatch({type : 'GET_INFO_OF_MUSIC', payload : track})
          return true
      })
      .catch(error=>{
          return false
      })
}