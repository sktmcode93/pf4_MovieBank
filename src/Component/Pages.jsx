import React from 'react';
import "./Pages.css";

const Pages = (props) => {
    return(
        <ul className="pages">
            <li onClick={props.selectPage}>&lt;&lt;</li>
            <li onClick={props.selectPage}>&lt;</li>
            {pNums(props.paragraph, props.selectPage)}        
            <li onClick={props.selectPage}>&gt;</li>
            <li onClick={props.selectPage}>&gt;&gt;</li>
        </ul>
    );
}
const pNums = (num, selectPage) => {
    let p=1;
    const list = new Array(10).fill((num-1)*10).map((i, idx) => {
        return <li key={idx} onClick={selectPage}>{i+p++}</li>
    })
    return list;
}
export default Pages;