import React from 'react';
import './MovieBox.css';
import MovieHeader from './MovieHeader';
import Genres from './Genres';
import Pages from './Pages';

const MovieBox = (props) => {
    return(
        <div className="moviebox">
            <MovieHeader selectList={props.selectList}/>
            <div className="container">
                <Pages pages={props.pages} page={props.page}/>
                <div className="movie-main">
                    {drawList(props.movieList, props.selectMovie)}
                </div>
                <Pages pages={props.pages} page={props.page}/>
            </div>
        </div>
    )
}

const drawList = (movieList, selectMovie) => {
    const list = movieList.map(movie =>{
        return makingMovie(movie, selectMovie);
    })
    return list;
}
const makingMovie = (movie, selectMovie) => {
    return(
        <div className="mb-movie" key={movie.id}>
            <div className="mb-movie-poster">
                <img src={movie.medium_cover_image} alt={movie.title} onClick={selectMovie}/>
                <div className="mb-movie-id">{movie.id}</div>
            </div>
            <div className="mb-movie-info">
                <h2>{movie.title_long}</h2>
                <span>Rating : {movie.rating}</span>
                <p>{movie.synopsis}</p>
                <Genres genres={movie.genres}/>
            </div>
        </div>
    )
}

export default MovieBox;