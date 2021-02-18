import React from 'react';

const MovieHeader = (props) => {
    return(
        <div className="mb-header">
            <div className="container">
                <h1 className="mb-header-title">MovieBank</h1>
                <ul>
                    <li onClick={props.selectList}>최신순</li>
                    <li onClick={props.selectList}>평점순</li>
                    <li onClick={props.selectList}>다운로드순</li>
                </ul>
            </div>
        </div>
    );
}
 
export default MovieHeader;