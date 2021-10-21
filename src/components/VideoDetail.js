import React from 'react'

export default function VideoDetail({video}) {
    if(!video){
        return (<div>loading</div>)
    }

    const videosrc=` https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>

                <iframe title='video player' src={videosrc} />

            </div>
    
        <div className='ui segment'>
            <div className='header'>  
            <h4> {video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
            
        </div>
        </div>
    )
}
