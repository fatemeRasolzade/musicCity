import axios from "axios"
import fetchJsonp from "fetch-jsonp"

export const getMusics =()=> async (dispatch) =>{

  return await fetchJsonp(`https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&quorum_factor=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json.message.body.track_list)
        dispatch({type : 'INIT', payload : json.message.body.track_list})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

  // export const getInfoOfMusic =(track)=> async (dispatch) =>{

  // return await axios('https://api.genius.com/search?q=love',{
  //     method:"GET",
  //     params: {q: 'love'},
  //     headers: {
  //       'Authorization': 'Bearer -vsC-FCVeeA1NSQcmIeZLTCfhh7m-8a5qpXPDvGgecn3vsEt0QtRoYZIQBcVV3AN' 
  //     },
  //     // data : JSON.stringify(data)
  //     })
  //     .then(res=>{
  //         dispatch({type : 'GET_INFO_OF_MUSIC', payload : track})
  //         return true
  //     })
  //     .catch(error=>{
  //         return false
  //     })
