import { React, useState } from 'react';
import { Modal } from '@mui/material';
import Draggable from 'react-draggable'
import './styles.css'

function ChordContainer({ line }) {

    // plus button is a new Draggable element 

    const [dragContent, setDragContent] = useState('')

    const el = document.createElement("div");

    // class Chord {
    //     constructor(height, width) {
    //         this.value = dragContent;
    //     }
    // }

    const onClick = () => {
        console.log('clikced');



        const drag = <Draggable><p>${dragContent}</p></Draggable>
        el.innerHTML(drag)
        console.log(el)

        setDragContent(drag)
    }




    return (
        <div className="chordContainer">
            <button onClick={onClick}>Click me</button>
            <Draggable>
                <p>Ab</p>
            </Draggable>
        </div>
    );
}

export default ChordContainer;