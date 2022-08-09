import React from 'react';
// import RangeSlider from './RangeSlider.js';
import DragSlider from './DragSlider.js';
import './styles.css'

function ChordContainer({ line }) {

    return (
        <div className="chordContainer">
            this is chord container {line?.currentId}
            {/* <RangeSlider /> */}
            <DragSlider />
        </div>
    );
}

export default ChordContainer;