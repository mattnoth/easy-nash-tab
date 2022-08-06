import React from 'react';

function LyricContainer({ line }) {
    return (
        <div
            className="lyricContainer"> {line?.lyric}
        </div>
    );
}

export default LyricContainer;