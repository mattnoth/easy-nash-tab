import { React, useState, useRef } from 'react';

import Draggable from 'react-draggable';
import './styles.css';

function ChordContainer({ line }) {
	// defer backend/front end ---

	// clickable html instead of a p, the p is complicated

	// how do i get coords out of the draggable element --
	// render each character in it's own html elements

	//

	const oneChordEl = useRef();

	/** @testFunctionsDraggable */
	const onStart = () => {
		console.log('onStart()');
	};
	const onDrag = () => {
		console.log('onDrag()');
	};
	const onMouseDown = () => {
		console.log('onMouseDown()');
	};
	const onStop = () => {
		console.log('onStop()');
	};

	/**
	 * @usingInput
	 * * Draggable tests
	 *  */
	// const inputEl = useRef(null);
	// const onChordInputChange = () => {
	// console.log(inputEl);
	// };

	/* <input
			ref={inputEl}
			type='text'
			// value=''
			onChange={onChordInputChange}
		/> */

	// calculate total width of the lyrics, use that to create the nested grid for the chord container

	// map chord containers in a way that each oneLine / section has it's own reference

	console.log(oneChordEl);

	return (
		<div className='chordContainer'>
			<div> hello </div>
			<div className='oneChord' ref={oneChordEl}>
				<Draggable
					onStart={onStart}
					onDrag={onDrag}
					onStop={onStop}
					onMouseDown={onMouseDown}>
					<p>Ab</p>
				</Draggable>
			</div>

			<Draggable>
				<p>Fm7</p>
			</Draggable>
			<Draggable>
				<p>Bb</p>
			</Draggable>
		</div>
	);
}

export default ChordContainer;
