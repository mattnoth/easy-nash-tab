import { useState } from "react";
import React from 'react';
import { bennieAndTheJets } from '../../data/BennieAndTheJets'
import Main from '../MainContainers/Main.js'


function MainContainerLogic(props) {

    const [fullLyricString, setFullLyricsString] = useState('')
    const [lyricArray, setLyricArray] = useState([])
    const [currentLine, setCurrentLine] = useState([]);

    const splitLyrics = (lyrics) => {
        const arr = lyrics.split(/\r?\n/);
        setLyricArray(arr);
    }

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

    if (fullLyricString == '') {
        setFullLyricsString(bennieAndTheJets);
    }

    if (fullLyricString && lyricArray.length === 0) {
        splitLyrics(fullLyricString);
    }

    let tempLyrics;

    if (lyricArray.length > 0) {
        if (lyricArray[0]) {
            console.log("this works")
            return;
        } else {
            tempLyrics = createObject(lyricArray);

        }
    }

    if (tempLyrics) {
        tempLyrics.map((line) => {
            currentLine.push(line);
        })
    }

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
                                <Main
                                    line={line}
                                    key={line?.currentId}
                                />

                            )
                        }
                    })
                }

            </div>
        </>
    );
}

export default MainContainerLogic;