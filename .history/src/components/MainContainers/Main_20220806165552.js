import React from 'react';

function Main({ line }) {
    return (
        <div>
            <p> {line?.lyric}</p>
            <p>This is Main</p>
        </div>
    );
}

export default Main;