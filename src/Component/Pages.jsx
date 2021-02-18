import React from 'react';

const Pages = (props) => {
    return(
        <ul className="pages">
            {pNums(props.page)}        
        </ul>
    )
}
const pNums = (num) => {
    let use = num;
    const list = new Array(10).fill(1).map((i, idx) => {
        return <li key={idx}>{i*(use++)}</li>
    })
    return list;
}
export default Pages;