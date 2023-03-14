import React from 'react';

import './styles.css';

function LyricContainer({ lyrics, chords }) {
	const lyricArray = lyrics?.split(' ');


	const findChordByPosition = (position, chords) => {
		return chords.find((c) => c.position === position)?.chordName;
	};

	// looks through chord it will find the position 1/3/7 in the section's chord object and determine if that equals the data-id

	return (
		<div className='lyricContainer'>
			{lyricArray?.map((lyric, i) => {
				return (
					<div data-id={i} className='one-line'>
						<div>{findChordByPosition(i, chords)}</div>
						<div>{lyric}</div>
					</div>
				);
			})}
		</div>
	);
}

export default LyricContainer;
