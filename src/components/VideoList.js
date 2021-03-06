import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videos,onVideoSelect}) {


  const list =  videos.map(video=>{

        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>
    })

    return (
        <div className='ui relaxed divided list'>
         
           {list} 
           
        </div>
    )
}

export default VideoList
