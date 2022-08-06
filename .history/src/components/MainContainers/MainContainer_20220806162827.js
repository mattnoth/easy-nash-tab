import { useState, useEffect } from "react";
import React from 'react';
import { bennieAndTheJets } from '../../data/BennieAndTheJets'
import LyricContainer from '../LyricContainer/LyricContainer'
import OneLine from '../MainContainers/OneLine.js'
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

function MainContainer(props) {

    const [fullLyricString, setFullLyricsString] = useState('')
    const [lyricArray, setLyricArray] = useState([])
    const [currentLine, setCurrentLine] = useState([]);
    // make into state when add lyrics are dynamic; bring down as prop and useEffect

    let temp = {}
    const splitLyrics = (lyrics) => {
        const arr = lyrics.split(/\r?\n/);
        setLyricArray(arr);
    }

    const createObject = (lyrics) => {
        console.log("if statement")

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
        tempLyrics = createObject(lyricArray);
    }

    if (tempLyrics) {
        // console.log(typeof tempLyrics)
        tempLyrics.map((line) => {
            //  console.log(line);
            currentLine.push(line);
        })

        //  console.log("currentLine", currentLine)
    }

    useEffect(() => {
        returnJSX()

    }, [currentLine])

    const returnJSX = () => {
        return (
            <>
                <div className="mainContainer">
                    {
                        currentLine.map((line) => {
                            <p> ${line.lyric} </p>
                        })
                    }
                    main container
                </div>
            </>
        );

    }



    // const [songLyrics, setSongLyrics] = useState(``);
    // const [lyricArray, setSongLyricArray] = useState([]);
    // const [currentLine, setCurrentLine] = useState(``);

    // const splitLyrics = (lyrics) => {
    //     const arr = lyrics.split(/\r?\n/);
    //     setSongLyricArray(arr);
    // }

    // if (songLyrics === '') {
    //     setSongLyrics(bennieAndTheJets);
    // }

    // if (songLyrics && lyricArray.length === 0) {
    //     splitLyrics(songLyrics);
    // }

    // if (lyricArray.length) {
    //     for (let i = 0; i < lyricArray.length; i++) {
    //         return (
    //             <OneLine />
    //         )
    //     }
    // }

    // if (lyricArray.length) {
    //     return (
    //         <>
    //             <div className="mainContainer">
    //                 main container
    //                 {/* {lyricArray.forEach((line) => {
    //                     <p>hello</p>
    //                 })} */}
    //             </div>
    //         </>
    //     );
    // }

}

export default MainContainer;