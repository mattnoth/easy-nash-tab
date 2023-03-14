import { React, useEffect, useState } from 'react';

// import ChordsContainer from '../ChordContainer/ChordsContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js';
// import './mainContainerStyles.css';
import '../../App.css';

function Main({ sections }) {
	// let pos = {
	// 	left: '25px',
	// 	top: '5px',
	// };

	const findChordByPosition = (position, chords) => {
		return chords.find((c) => c.position === position)?.chordName;
	};

	//

	return (
		<>
			{sections.map((section) => {
				return (
					<div className='section' key={`section-${section.currentLine}`}>
						<div className='chord_container'>
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
						</div>

						<LyricContainer chords={section.chords} lyrics={section.lyric} />
					</div>
				);
			})}
		</>
	);
}

export default Main;
