import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from '@mui/material';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://i.ytimg.com/vi/bgUqncj_AAU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0nSNRzDGsYi7w3gC6n0FYWflMQg" alt="" />
                <div className="footer__songInfo">
                    <h4>Tumhare Aane Se</h4>
                    <p>Ashu Shukla</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' /> 
            </div>
            <div className="footer__right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid >
                </Grid>
            </div>
        </div>
    )
}

export default Footer