import React from 'react';
import "./Pages.css";

const Pages = (props) => {
    return(
        <ul className="pages">
            <li>&lt;&lt;</li>
            <li>&lt;</li>
            {pNums(props.page)}        
            <li>&gt;</li>
            <li>&gt;&gt;</li>
        </ul>
    );
}
const pNums = (num) => {
    let use = num;
    const list = new Array(10).fill(1).map((i, idx) => {
        return <li key={idx}>{i*(use++)}</li>
    })
    return list;
}
export default Pages;