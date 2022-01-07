import React from 'react';
import {ButtonVideo} from './ButtonVideo'
import './Logout.css';
import '../App.css';

function LogoutVideo() {
    return (
        <div>
            <video src="videos/video1.mp4" autoPlay loop muted></video>
            <div id='textOverlay'>
                <h1 id='videoH1'>Happy Cooking!</h1>
                <p id='videoP'>No thyme for complicated recipies? No Worries, We'll make it easy!</p>
                <div className='video-btns'>
                    <ButtonVideo 
                        className='btns' buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                        Return to home
                    </ButtonVideo >
                   
                </div>
            </div>
        </div>
    )
}

export default LogoutVideo
