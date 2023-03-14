import './App.css';
import { React, useState, useEffect } from 'react';
import { bennieAndTheJets } from '../src/data/BennieAndTheJets';
import { yourSong } from './data/YourSong';
import { yourSongFull } from './data/YourSongFull';
import Main from './components/MainContainers/Main.js';

import './index.css';

function App() {
	console.log(yourSongFull);

	/**
	 * @State
	 */

	// const [lyrics, setLyrics] = useState(``);
	// const [lyricArray, setLyricArray] = useState([]);
	const [sections, setSections] = useState([{}]);
	// const [totalNumberOfLines, setTotalNumberOfLines] = useState(0);
	// const [mainContainerWidth, setMainContainerWidth] = useState(0);

	// /** @conditional to set Full Lyric String to @state */
	// if (lyrics === ``) {
	// 	setLyrics();
	// 	setLyrics();
	// }

	// const splitLyrics = (lyrics) => {
	// 	const arr = lyrics.split(/\r?\n/);
	// 	arr.shift();
	// 	setLyricArray(arr);
	// };

	// /** @conditional to run @splitLyric helper */
	// if (lyrics && lyricArray.length === 0) {
	// 	splitLyrics(lyrics);
	// }

	/**
	 * @helper functions
	 */

	// const getTotalNumberOfLines = (arr) => {
	// 	setTotalNumberOfLines(arr.length);
	// };

	// const getMainContainerWidth = (arr) => {
	// 	let max_str = arr[0].length;
	// 	let longestString = arr[0];
	// 	for (let i = 1; i < arr.length; i++) {
	// 		let maximum = arr[i].length;
	// 		if (maximum > max_str) {
	// 			longestString = arr[i];
	// 			max_str = maximum;
	// 		}
	// 	}
	// 	setMainContainerWidth(longestString.length);
	// };

	/**
	 * @param {@state} lyricArray
	 * @returns sections into state
	 */
	// const createSections = (lyricArray) => {
	// 	let tempSectionObject = {};
	// 	let tempSectionArray = [];

	// 	// sections[0].chords.chordName
	// 	// all the chords are left justified , start at the beginning of the first letter of the word below
	// 	// for a chord in the "half" of the word... give it the value of an offset so that it
	// 	// moves from the beggining of the word to the middle, so forth
	// 	for (let i = 0; i < lyricArray.length + 1; i++) {
	// 		tempSectionObject = {
	// 			lyric: lyricArray[i],
	// 			currentLine: i + 1,
	// 			chords: [
	// 				{
	// 					chordName: 'C',
	// 					position: 0,
	// 				},
	// 				{
	// 					chordName: 'F',
	// 					position: 2,
	// 				},
	// 				{
	// 					chordName: 'G',
	// 					position: 4,
	// 				},
	// 			],
	// 		};

	// 		tempSectionArray.push(tempSectionObject);
	// 	}
	// 	setSections(tempSectionArray);
	// };

	useEffect(() => {
		setSections(yourSongFull);
	}, []);

	return (
		<div className='App'>
			<div className='outer_container'>
				<Main
					// mainContainerWidth={mainContainerWidth}
					// totalNumberOfLines={totalNumberOfLines}
					sections={sections}
				/>
			</div>
		</div>
	);
}

export default App;
