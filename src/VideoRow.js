import { Avatar } from '@mui/material'
import React from 'react'
import './VideoRow.css'

const VideoRow = ({title,image,channel,views,subscribers,description}) => {
  return (
    <div className="videorow">
        <img className="videorow__logo" src={image} alt=""/>
        <div className="videorow__text">
            <h2>{title}</h2>
            <p className="videorow__text__top">{views} views • {subscribers} subscribers</p>
            <p className="videorow__text__middle">
               <Avatar className="videorow__text__middle__avatar" src={image}/> {channel} 
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow