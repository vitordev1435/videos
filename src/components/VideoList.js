import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {


      const rederedList =  videos.map((video) => {
           return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
       })
   
return <div className="ui relaxed divided list">{rederedList}</div>

}


export default VideoList;