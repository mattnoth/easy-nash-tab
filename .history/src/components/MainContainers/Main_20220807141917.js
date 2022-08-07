import React from 'react';
import ChordContainer from '../ChordContainer/ChordContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js'
import './mainContainerStyles.css'

function Main({ line }) {
    return (
        <>
            <ChordContainer
                line={line}

            />
            <LyricContainer
                line={line} />
        </>
    );
}

export default Main;