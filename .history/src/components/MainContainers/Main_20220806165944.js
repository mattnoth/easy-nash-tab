import React from 'react';

function Main({ line }) {
    return (
        <>
            <p key={currentId}>Chord Line, {line?.currentId}</p>
            <p key={currentId}> {line?.lyric}</p>

        </>
    );
}

export default Main;