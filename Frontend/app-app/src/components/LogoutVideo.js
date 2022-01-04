import React from 'react';
import { Button } from './Button';
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
                    <Button 
                        className='btns' buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                        Return to home
                    </Button>
                    <Button 
                        className='btns' buttonStyle='btn--primary' 
                        buttonSize='btn--large'>
                        Watch a video! <i className='far fa-play-circle'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LogoutVideo
