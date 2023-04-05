import { React } from 'react';
import { yourSongFull } from './data/YourSongFull';
import LyricContainer from './components/LyricContainer/LyricContainer';

import './index.css';

import './App.css';

function App() {
	const sections = yourSongFull;

	return (
		<div className='App'>
			<div className='outer_container'>
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
			</div>
		</div>
	);
}

export default App;
