import React from 'react'

const Props = (props) => {
    const { data } = props;
    return (
        <div>
            <h2>Props</h2>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>  
    )
}

export default Props
