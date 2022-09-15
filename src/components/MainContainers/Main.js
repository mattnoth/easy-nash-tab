import { useState } from 'react';
import React from 'react';
import { bennieAndTheJets } from '../../data/BennieAndTheJets';
import ChordContainer from '../ChordContainer/ChordContainer.js';
import LyricContainer from '../LyricContainer/LyricContainer.js';
import './mainContainerStyles.css';

function Main() {
	/**
	 * @states
	 * @fullLyricString
	 * @lyricArray initial arr of split lyrics
	 * @currentLine Object with current lines - probably needs a better name
	 */
	const [fullLyricString, setFullLyricsString] = useState('');
	const [lyricArray, setLyricArray] = useState([]);
	const [currentLine, setCurrentLine] = useState([]);

	// each song will need META data too; so could possible set the full lyric string to the song object,
	// with that, set sections array of objects nested within section?

	// TODO -- Constructor to set state? but with state you will only get one object - so how do i bring that down the prop tree?
	// TODO chord container gets section.chords array

	// do lyric width and line width need to be the same? probably, because we need to find the positional value of the element: starting position up to ending position

	const lines = [
		// instead of passing the full lyric array to each line, I need to pass each value of each index of the lyric Array into here
		{
			lyric: `oh yeah singing yeah`,
			id: `unique key current index`,
			maxContentLyricWidth: ['1', '2', '3'], // as numbers, or can I do an array of strings (with px) or can I use a transformer to add the suffix after the fact?,
		},
	];
	// TODO Set to STATE? or MEMOIZE? constant width once set will never need to change -- but will be needed for render - so when this gets update, the width needs to change -- is this a useEffect?
	// TODO find max length of lyrics -- the container widths will be this, plus whatever number of pixesls
	const mainContainerWidth = lines.maxContentLyricWidth; // 'margin: auto of the above todo'

	const totalLines = 0; // total number of indeicies of lyricArray

	const chords = [
		{
			name: `Ab9maj7`, // to be set down the prop tree
			id: ``, // TODO - useEffect set State lyric[i] for unique ID ,
		},
	];

	// chords / lines containers' must have the same width to locate position of chords as well as consitensy, etc

	const sections = [
		{
			containerWidth: lines.line.maxContentLyricWidths + '20px', // TODO: calcuate max content of the string, add space to either side,
			lyrics: lines,
			chords: chords,
		},
	];

	// props to lyric container -- lines[i].lyric, mainContainerWidth, lines.id

	// or do I need this as props?? but, theyre going to need that for the positional location of the chords relative to this, so yes...
	// BUT this is probably not where i should set the STYLE value of the container, more calculations, instead, the MAIN container
	// gets a width of
	// TODO lyric props are sections.lyrics, lyrics.lines.maxContentLyricWidth
	// TODO chord props are sections.chords, lyrics.lines.maxContentLyricWidth

	// temp @var for objects
	let tempLyrics;

	/**
	 * @helper split lyrics by linebreak, set lyric array @state
	 * @param {passed full lyrics} lyrics
	 */
	const splitLyrics = (lyrics) => {
		const arr = lyrics.split(/\r?\n/);
		setLyricArray(arr);
	};

	/**
	 * @helper creates object for each line with unique id
	 * @param {full lyric array} lyrics
	 * @returns array of objects with each line value and id value
	 */
	const createObject = (lyrics) => {
		let obj = {};
		let arr = [];

		for (let i = 0; i < lyrics.length; i++) {
			obj = {
				lyric: lyrics[i],
				currentId: i,
			};
			arr.push(obj);
		}
		return arr;
	};

	/** @conditional to set Full Lyric String to @state */
	if (fullLyricString === '') {
		setFullLyricsString(bennieAndTheJets);
	}

	/** @conditional to run @splitLyric helper */
	if (fullLyricString && lyricArray.length === 0) {
		splitLyrics(fullLyricString);
	}

	/** @conditional after array set, remove first empty line, run @createObject on lyric array*/
	if (lyricArray.length > 0) {
		if (lyricArray[0]) {
			return;
		} else {
			tempLyrics = createObject(lyricArray);
		}
	}

	/** @check if tempLyrics, map each line's obj to an arr of objects  */
	if (tempLyrics) {
		tempLyrics.map((line) => {
			currentLine.push(line);
		});
	}

	/** @return main container, checks and returns on line 0, map each line to div and send props */

	// TODO
	return (
		<>
			{currentLine.map((line) => {
				if (line?.currentId === 0) {
					return <></>;
				} else {
					return (
						<div className='section' key={'div-' + line?.currentId}>
							<ChordContainer
								line={line}
								key={'section-chord-' + line?.currentId}
							/>
							<LyricContainer
								line={line}
								key={'section-lyric-' + line?.currentId}
							/>
						</div>
					);
				}
			})}
		</>
	);
}

export default Main;
