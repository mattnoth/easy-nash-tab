import React from 'react';

import '../../App.css';

function LyricContainer({ lyrics, chords }) {
	const lyricArray = lyrics?.split(' ');

	const findChordByPosition = (position, chords) => {
		return chords.find((c) => c.position === position)?.chordName;
	};

	// looks through chord it will find the position 1/3/7 in the section's chord object and determine if that equals the data-id

	return (
		<div className='lyricContainer'>
			{/* <div className='chord_container'>
				<span
					className='chord'
					style={{
						top: '2px',
						left: '0px',
					}}>
					Eb
				</span>
				<span className='chord' style={{ top: '2px', left: '25px' }}>
					Ab
				</span>
			</div> */}
			{lyricArray?.map((lyric, i) => {
				console.log(lyric);
				return (
					<div data-id={i}>
						{/* <div>{findChordByPosition(i, chords)}</div> */}

						<span>{lyric}</span>
					</div>
				);
			})}
		</div>
	);
}

export default LyricContainer;
