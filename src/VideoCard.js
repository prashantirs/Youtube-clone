import React from 'react'
import './videocard.css'
import Avatar from '@mui/material/Avatar';

const VideoCard = ({image,channel,views,timestamp,title,channelImage}) => {
  return (
    <div className="videocard">
        <img src={image} className="videocard__image" alt=""/>
        <div className="videocard__info">
            <Avatar className="videocard__avatar" alt={channel} src={channelImage}/>
            <div className="videocard_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} • {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard