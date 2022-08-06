import React from 'react';

function Main({ line }) {
    return (
        <>
            <p key={line?.currentId}>Chord Line, {line?.currentId}</p>
            <p key={line?.currentId}> {line?.lyric}</p>

        </>
    );
}

export default Main;