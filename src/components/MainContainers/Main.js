import { React, useState, useEffect } from 'react';

import ChordsContainer from '../ChordContainer/ChordsContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js';
import './mainContainerStyles.css';

function Main({ mainContainerWidth, totalNumberofLines, sections }) {
	return (
		<>
			{sections.map((section) => {
				return (
					<div className='section' key={`section-${section.currentLine}`}>
						<ChordsContainer
							chords={section.chords}
							currentLine={section.currentLine}
						/>
						<LyricContainer
							lyrics={section.lyric}
							currentLine={section.currentLine}
						/>
					</div>
				);
			})}
		</>
	);
}

export default Main;
