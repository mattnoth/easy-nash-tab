import React from 'react';

function Button(props) {

    const addChord = () => {
        console.log("plus button clicked")
    }

    return (
        <>
            <button
                onClick={addChord}
            >

            </button>
        </>
    );
}

export default Button;