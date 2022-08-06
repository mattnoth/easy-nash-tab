import React from 'react';

function Main({ line }) {
    return (
        <div>
            <p>This is Main</p>
            <p>Chord Line, {line?.currentId}</p>
            <p> {line?.lyric}</p>

        </div>
    );
}

export default Main;