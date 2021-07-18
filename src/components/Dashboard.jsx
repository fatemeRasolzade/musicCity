import axios from 'axios';
import React from 'react'
import SearchBar from './common/SearchBar'
import { Button } from '@material-ui/core';


const Dashboard = () => {




    return (
        <div className="container">
            <div className="row">
                <div className="col-5 my-5 mx-3 shadow-sm">
                    <SearchBar color="text-dark"/>
                    <div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">سحر</h5>
                                        <p class="card-text">الماس</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">سحر</h5>
                                        <p class="card-text">الماس</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">سحر</h5>
                                        <p class="card-text">الماس</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-6 my-5 mx-3 shadow-sm">
                    <img src="" />
                    <h5 class="card-title">سحر</h5>
                    <p class="card-text">الماس</p>

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

                </div>
            </div>
        </div>
    )
}

export default Dashboard
