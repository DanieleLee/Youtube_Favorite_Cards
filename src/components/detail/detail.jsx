import axios from 'axios';
import React, { useState } from 'react';
import Lists from './lists';

const Detail = ({card, youList}) => {
    const [selList, setSelList] = React.useState(null);
    const selectVideo = (video) => {
        setSelList(video);
    }

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