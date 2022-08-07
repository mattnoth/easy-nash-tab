import React from 'react';
import './styles.css'

function ChordContainer({ line }) {

    let rangeslider = document.getElementById("sliderRange");
    let output = document.getElementById("demo");
    output.innerHTML = rangeslider.value;

    rangeslider.oninput = function () {
        output.innerHTML = this.value;
    }
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