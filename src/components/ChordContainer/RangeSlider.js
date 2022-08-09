import { React, useState, useEffect } from 'react';
import './styles.css'
// import { useState } from 'react';

function RangeSlider(props) {
    // const [thumbState, setThumbState] = useState('')
    // const [bubbleState, setBubbleState] = useState(0)

    // const el = document.getElementById('.bubble-1');

    // const handleChange = (e) => {
    //     // console.log("handleChange")

    //     setThumbState({ value: e.target.value })
    //     const tempNum = Number(thumbState.value)
    //     setBubbleState(tempNum);

    // }

    // useEffect(() => {

    //     // console.log(el)
    //     if (el) {
    //         // el.style.left = `${Number(thumbState.value / 4)}px`;
    //         el.style.left = `${bubbleState / 100} px`
    //         console.log(el)
    //     }
    // })

    // unused styles 

    //     .thumb {
    //         pointer - events: none;
    //         position: absolute;
    //         height: 0;
    //         width: 200px;
    //         outline: none;
    //     }

    // .thumb--zindex - 3 {
    //         z - index: 3;
    //     }

    // .thumb--zindex - 4 {
    //         z - index: 4;
    //     }

    const [value, onChange] = useState(1);

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })



    return (
        <>
            <div className='slider'>


                <div className="slider-parent">
                    <input type="range" min="1" max="500" value={value}
                        onChange={({ target: { value: radius } }) => {
                            onChange(radius);
                        }}
                    />
                    <div className="buble">
                        {value}
                    </div>
                </div>



                {/* <div className="slider__range" />

                <input
                    type="range"
                    min="0"
                    max="5"
                    onChange={handleChange}
                    className="thumb thumb--zindex-3"
                />
                <div className="thumb thumb--zindex-3" id="bubble-1">
                    {thumbState.value}
                </div> */}

            </div>

            {/* <div className='slider'>
                <div className="slider__range" />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    className="thumb thumb--zindex-4"
                    onChange={handleChange}
                />
            </div> */}
            {/* <div className="slider">
                <div className="slider__track" />
                <div className="slider__range" />
            </div> */}
        </>
    );
};


export default RangeSlider;