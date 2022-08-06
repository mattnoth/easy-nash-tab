import React from 'react';

function Main({ line }) {
    return (
        <>
            <p key={line?.currentId + "chordline"}>Chord Line, {line?.currentId}</p>
            <p key={line?.currentId + "line"}>{line?.lyric}</p>

        </>
    );
}

export default Main;