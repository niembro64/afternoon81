import React from 'react';

const Step = (props) => {

    return  (<div>
        instruction: {props.instructions}
        direction: {props.direction}
        distance: {props.distance}
    </div>)
}

export default Step;