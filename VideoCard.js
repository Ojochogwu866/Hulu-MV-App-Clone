import React, { forwardRef } from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from '@material-ui/icons';


const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate 
            line={2}
            element="p"
            truncateText="..."
            text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videocard__stats"> 
            {movie.media_type && `${movie.media_type} - `}
            {movie.release_date || movie.first_air_date} - 
                <ThumbUpSharp />{""} {movie.vote_count}</p>

            

        </div>

    ); 
}); 

export default VideoCard;