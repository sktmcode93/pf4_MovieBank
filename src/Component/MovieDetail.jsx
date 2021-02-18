import React from 'react';
import Genres from './Genres';

const MovieDetail = ({display}) => {
    return(
        <div className="movie-detail">
            <div className="container">
                <input type="button" className="movie-detail-cancel" value="x" onClick={removeDetail}/>
                <div className="movie-detail-box">
                    <figure className="movie-detail-poster">
                        <img src={display.medium_cover_image} alt={display.title}/>
                        <figcaption className="md-title">{display.title_long}</figcaption>
                    </figure>
                    <div className="movie-detail-info">
                        <span className="md-info-rating">Rating : {display.rating}</span>
                        <p className="md-info-description">{display.description_full}</p>
                        <Genres genres={display.genres}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
const removeDetail = () => {
    document.querySelector(".movie-detail").style.display = "none";
}
export default MovieDetail;