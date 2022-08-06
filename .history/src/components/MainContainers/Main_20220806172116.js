import React from 'react';
import ChordContainer from '../ChordContainer/ChordContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js'

function Main({ line }) {
    return (
        <>
            {/* <p>{line?.currentId}</p>
            <p>{line?.lyric}</p> */}
            <ChordContainer
                line={line}
                className="chordContainer"
            />
            <LyricContainer
                className="lyricContainer"
                line={line} />
        </>
    );
}

export default Main;