import React, { Fragment } from "react";
// note: fragment allows us to make a quick parent component to improve performance/reduce data stored for page display

const VideoDetail = ({ ...props, selectedVideo }) => {
    // defensive code - makes sure we have video info before trying to render a component with that info
    if (!selectedVideo) {
        return (
            <div>Loading Video</div>
        )
    }

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Fragment>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <h4>{selectedVideo.snippet.description}</h4>
        </Fragment>
    )
}

export default VideoDetail;