import React from 'react';

function ChordContainer({ line }) {
    return (
        <div className="chordContainer">
            this is chord container {line?.currentId}
            <div class="rangeslider">
                <input type="range" min="1" max="100" value="10"
                    class="myslider" id="sliderRange"> </input>
            </div>
        </div>
    );
}

export default ChordContainer;