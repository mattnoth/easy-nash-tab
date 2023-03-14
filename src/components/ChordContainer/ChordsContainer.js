import { React, useState, useRef } from 'react';
import Draggable from 'react-draggable';
import DraggableChord from './DraggableChord';
import './styles.css';

function ChordsContainer({ chords, currentLine }) {
	/** @testFunctionsDraggable */

	let chordRef = useRef(null);

	return (
		<div className='chordContainer'>
			{chords?.map((chord) => {
				return (
					<div className='oneChordContainer'>
						<Draggable chordRef={chordRef}>
							<div ref={chordRef}>{chord.chordName}</div>
						</Draggable>
					</div>
				);
			})}
		</div>
	);
}

export default ChordsContainer;
