import React from 'react';

function Main({ line }) {
    return (
        <>
            <p>Chord Line, {line?.currentId}</p>
            <p> {line?.lyric}</p>

        </>
    );
}

export default Main;