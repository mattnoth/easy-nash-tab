import './App.css';
import { React, useState, useEffect } from 'react';
import { bennieAndTheJets } from '../src/data/BennieAndTheJets';
import Main from './components/MainContainers/Main.js';

function App() {
	/**
	 * @State
	 */

	const [lyrics, setLyrics] = useState(``);
	const [lyricArray, setLyricArray] = useState([]);
	const [sections, setSections] = useState([{}]);
	const [totalNumberOfLines, setTotalNumberOfLines] = useState(0);
	const [mainContainerWidth, setMainContainerWidth] = useState(0);

	/** @conditional to set Full Lyric String to @state */
	if (lyrics === ``) {
		setLyrics(bennieAndTheJets);
	}

	const splitLyrics = (lyrics) => {
		const arr = lyrics.split(/\r?\n/);
		arr.shift();
		setLyricArray(arr);
	};

	/** @conditional to run @splitLyric helper */
	if (lyrics && lyricArray.length === 0) {
		splitLyrics(lyrics);
	}

	/**
	 * @helper functions
	 */

	const getTotalNumberOfLines = (arr) => {
		setTotalNumberOfLines(arr.length);
	};

	const getMainContainerWidth = (arr) => {
		let max_str = arr[0].length;
		let longestString = arr[0];
		for (let i = 1; i < arr.length; i++) {
			let maximum = arr[i].length;
			if (maximum > max_str) {
				longestString = arr[i];
				max_str = maximum;
			}
		}
		setMainContainerWidth(longestString.length);
	};

	/**
	 * @param {@state} lyricArray
	 * @returns sections into state
	 */
	const createSections = (lyricArray) => {
		let tempSectionObject = {};
		let tempSectionArray = [];

		// sections[0].chords.chordName
		for (let i = 0; i < lyricArray.length + 1; i++) {
			tempSectionObject = {
				lyric: lyricArray[i],
				currentLine: i + 1,
				chords: [
					{
						chordName: 'C',
					},
					{
						chordName: 'F',
					},
					{
						chordName: 'G',
					},
				],
			};

			tempSectionArray.push(tempSectionObject);
		}
		setSections(tempSectionArray);
	};

	useEffect(() => {
		if (lyricArray.length > 0) {
			getMainContainerWidth(lyricArray);
			getTotalNumberOfLines(lyricArray);
			createSections(lyricArray);
		}
	}, [lyricArray]);

	return (
		<div className='App'>
			<Main
				mainContainerWidth={mainContainerWidth}
				totalNumberOfLines={totalNumberOfLines}
				sections={sections}
			/>
		</div>
	);
}

export default App;
