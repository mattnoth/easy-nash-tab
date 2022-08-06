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
        arr.splice(arr[0], arr[1])
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
                        return (
                            <>
                                <p>Chord Line, {line?.currentId}</p>
                                <p>{line?.lyric}</p>
                            </>

                        )
                    })
                }

            </div>
        </>
    );






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

export default MainContainerLogic;