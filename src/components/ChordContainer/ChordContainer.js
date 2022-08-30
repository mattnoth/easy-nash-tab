import { React, useState } from 'react';
import { Modal } from '@mui/material';
import Draggable from 'react-draggable'
import './styles.css'

function ChordContainer({ line }) {

    // plus button is a new Draggable element 

    // const [dragContent, setDragContent] = useState('')

    // const el = document.createElement("div");

    // class Chord {
    //     constructor(height, width) {
    //         this.value = dragContent;
    //     }
    // }

    // const onClick = () => {
    //     console.log('clikced');



    //     const drag = <Draggable><p>${dragContent}</p></Draggable>
    //     el.innerHTML(drag)
    //     console.log(el)

    //     setDragContent(drag)
    // }


    // its because its an array you dodo bird 
    const chords = [{
        id: 1,
        chordToDisplay: "C"
    },
    {
        id: 2,
        chordToDisplay: "F"
    },
    {
        id: 3,
        chordToDisplay: "G"
    }
    ];


    console.log(chords.chordToDisplay)



    return (
        <div className="chordContainer">

            {chords.map((...chord) => (
                <div className="chordToDisplay">
                    <Draggable>
                        <p>
                            {chord.chordToDisplay}
                        </p>
                    </Draggable>
                </div>
            ))}
            Chord Container
        </div>
    );
}

export default ChordContainer;