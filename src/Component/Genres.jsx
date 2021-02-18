import React from 'react';

const Genres = (props) => {
    return(
        <ul> Genres : {makingGenres(props.genres)}</ul>
    )
}
const makingGenres = (data) => {
    const genres = data.map((genre,idx) => {
        return <li key={idx}>{genre}</li>
    })
    return genres;
}
export default Genres;
