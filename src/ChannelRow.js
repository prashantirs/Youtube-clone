import React from "react";
import Avatar from "@mui/material/Avatar";
import './ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const ChannelRow = ({ verified,image, channel, videos, subscribers,description }) => {
  return (
    <div className="channelRow">
      <div >
        <Avatar className="channelRow__avatar" alt={channel} src={image} />
      </div>
      <div className="channelRow__text">
        <h2>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h2>
        <p>{description}</p>
        <p>{subscribers} subscribers • {videos} videos</p>
      </div>
    </div>
  );
};

export default ChannelRow;
