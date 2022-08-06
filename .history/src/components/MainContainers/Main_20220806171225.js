import React from 'react';
import ChordContainer from '../ChordContainer/ChordContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js'

function Main({ line }) {
    return (
        <>
            <p>{line?.currentId}</p>
            <p>{line?.lyric}</p>
        </>
    );
}

export default Main;