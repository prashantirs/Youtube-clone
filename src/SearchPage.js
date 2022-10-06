import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr/>
      <ChannelRow verified image={"https://pngroyale.com/wp-content/uploads/2021/11/Download-photoshop-brand-png-logo-.png"} views={"1.8K"} channel={"Prashant Srivastava"} subscribers={"105"} videos={"22"} description={""}/>
      <hr/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"Some Rare Moments of My life | MITS Gwalior"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/JV2i6DtFUI8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFJu8Wr0w9EZynpjhx7hhcUT766A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"GAME | FLY CESSNA 172 | PART 2 | TAKEOFF &..."} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/hJ41hRx1x14/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXCtpyjiuHyJDfoZfsv4v_Qun6nQ"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"Extreme landing Pro | Cinematic Video of previous one landing | Gaming | Flight | Planes"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/UScTGPTL5As/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvQV8T6iw8cV1EC7N6NV6I-Z6yJA"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"This line 🔥 | LOSER |"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"New Video out"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"New Video out"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"New Video out"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"New Video out"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
      <VideoRow image = {"https://i.ytimg.com/vi/OvA2SN-A1_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR8GHIQiFEE11EXte0MabFf9Ij5A"} channel = {"Prashant Srivastava"} views={"1.8K"}  subscribers={"105"}  title = {"New Video out"} description={"The YouTube channel description conveys to potential viewers what your content will cover, including the issues..."}/>
    </div>
  );
};

export default SearchPage;
