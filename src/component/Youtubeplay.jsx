import React from 'react'
import "./youtubeplayer.css";
const Youtubeplay = ({ videoId })  => {
    return (
        <div className="video-container">
            <iframe
                title="YouTube video player"
                className="video-player"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Youtubeplay;
