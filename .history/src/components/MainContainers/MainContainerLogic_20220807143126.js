import { useState } from "react";
import React from 'react';
import { bennieAndTheJets } from '../../data/BennieAndTheJets'
import Main from '../MainContainers/Main.js'
import './mainContainerStyles.css'


function MainContainerLogic(props) {

    /** 
     * @states 
     * @fullLyricString 
     * @lyricArray initial arr of split lyrics 
     * @currentLine Object with current lines - probably needs a better name
     */
    const [fullLyricString, setFullLyricsString] = useState('')
    const [lyricArray, setLyricArray] = useState([])
    const [currentLine, setCurrentLine] = useState([]);

    // temp @var for objects 
    let tempLyrics;

    /**
     * @helper split lyrics by linebreak, set lyric array @state
     * @param {passed full lyrics} lyrics 
     */
    const splitLyrics = (lyrics) => {
        const arr = lyrics.split(/\r?\n/);
        setLyricArray(arr);
    }

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
                currentId: i
            }
            arr.push(obj)
        }
        return arr;
    }

    /** @conditional to set Full Lyric String to @state */
    if (fullLyricString == '') {
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
        })
    }

    /** @return main container, checks and returns on line 0, map each line to div and send props */
    return (
        <>
            <div className="mainContainer">
                main container
                {
                    currentLine.map((line) => {
                        if (line?.currentId === 0) {
                            return
                        } else {
                            return (
                                <div className="oneLine" key={"div " + line?.currentId}>
                                    <Main
                                        line={line}
                                        key={"main " + line?.currentId}
                                    />
                                </div>

                            )
                        }
                    })
                }
            </div>
        </>
    );
}

export default MainContainerLogic;