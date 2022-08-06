import React from 'react';

function ChordContainer({ line }) {
    return (
        <div className="chordContainer">
            this is chord container {line?.currentId}
        </div>
    );
}

export default ChordContainer;