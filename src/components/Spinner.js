import React from 'react';
import spinner from '../svgs/spinner.gif'

function Spinner() {
    return (
        <div className="spinner">
            <img src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner
