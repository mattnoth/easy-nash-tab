import { React, useRef } from 'react';

export default function DraggableChord({ chordToDisplay }) {
	let chordRef = useRef(null);

	return (
		<>
			<div ref={chordRef}>{chordToDisplay}</div>
		</>
	);
}
