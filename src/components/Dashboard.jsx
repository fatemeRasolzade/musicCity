import React,{useState, useEffect} from 'react'
import SearchBar from './common/SearchBar'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getMusics } from '../Redux/action/musicAction';

const Dashboard = ({musics, musicInfo, getMusics}) => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        initMusicList()
    }, []);

    const initMusicList =async () => {
        setLoading(true)
        await getMusics()
        setLoading(false)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 my-5 mx-3 shadow-sm">
                    <SearchBar color="text-dark"/>
                    <div>
                        
                            {loading ? 
                                <div class="text-center my-5">
                                <div class="spinner-grow text mx-3 pink" role="status">
                                    <span class="sr-only"></span>
                                </div>
                                <div class="spinner-grow text mx-3 pink" role="status">
                                    <span class="sr-only"></span>
                                </div>
                                <div class="spinner-grow text mx-3 pink" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                            : null}
                       
                        {musics.map(music => (
                            <div key={music.subtitle_id} class="card mb-3" >
                                <div class="row g-0 details-container">
                                    <div class="col-md-4">
                                        <img src={music.album_coverart_350x350} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{music.artist_name}</h5>
                                            <p class="card-text">{music.track_name}</p>
                                           
                                        </div>
                                    </div>
                                    <div class="show-details">
                                        <p class="m-0 py-2">مشاهده جزئیات</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="col-6 my-5 mx-3 shadow-sm">
                    <div className="text-center mt-5">
                        <img src={musicInfo.header_image_url} />
                    </div>
                    <h5 class="card-title pt-3">{musicInfo.primary_artist.name}</h5>
                    <p class="card-text">{musicInfo.title}</p>
                    <p class="card-text">{musicInfo.full_title}</p>
                    <div class="d-grid">
                        <audio controls>
                            <source src="horse.ogg" type="audio/ogg"/>
                            <source src="horse.mp3" type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>   
                    <Button
                        className="button mt-4"
                        variant="contained"
                    >
                        جزئیات
                    </Button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    musics: state.Musics.musics
    // musicInfo: state.Musics.musicInfo
})

export default connect(mapStateToProps,{getMusics})(Dashboard)
