import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Props = (props) => {
    const { data } = props;
    consr data = useSelector()
    return (
        <div>
            <h2>Props</h2>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>  
    )
}

export default Props
