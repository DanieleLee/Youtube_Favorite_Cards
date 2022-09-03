import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Lists from './lists';
import youtube_smp from '../../sample/youtube.json';

const Detail = ({card, youtube}) => {
    const [selList, setSelList] = React.useState(null);
    const [youList, setYouList] = React.useState([]);

    const selectVideo = (video) => {
        setSelList(video);
    }

    useEffect(() => {
        if(youtube != undefined){
            // youtube
            //     .mostPopular()
            //     .then((videos) => setYouList(videos))
            setYouList(youtube_smp.items);
        }
    });

    return (
        <div>
            <Lists 
                youList = {youList}
                onVideoClick = {selectVideo}
                display = 'flex'
            />

        </div>
    );
};

export default Detail;