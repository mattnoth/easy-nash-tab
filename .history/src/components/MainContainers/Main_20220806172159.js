import React from 'react';
import ChordContainer from '../ChordContainer/ChordContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js'

function Main({ line }) {
    return (
        <div className="oneLine">
            <ChordContainer
                line={line}
                className="chordContainer"
            />
            <LyricContainer
                className="lyricContainer"
                line={line} />
        </div>
    );
}

export default Main;