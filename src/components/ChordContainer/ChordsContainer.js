import { React, useState, useRef } from 'react';
import Draggable from 'react-draggable';
import DraggableChord from './DraggableChord';
import './styles.css';

function ChordsContainer({ chords, currentLine }) {
	/** @testFunctionsDraggable */
	// const onStart = () => {
	// 	console.log('onStart()');
	// };
	// const onDrag = () => {
	// 	console.log('onDrag()');
	// };
	// const onMouseDown = () => {
	// 	console.log('onMouseDown()');
	// };
	// const onStop = () => {
	// 	console.log('onStop()');
	// };

	let chordRef = useRef(null);

	// useEffect(() => {
	//   let

	//   return () => {

	//   }
	// }, [])

	return (
		<div className='chordContainer'>
			{/* <Draggable>
				<p>Ab</p>
			</Draggable> */}
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
