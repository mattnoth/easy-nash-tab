import { useState, useEffect } from "react";
import React from 'react';
import { bennieAndTheJets } from '../../data/BennieAndTheJets'
import LyricContainer from '../LyricContainer/LyricContainer'
import OneLine from '../MainContainers/OneLine.js'

function MainContainer(props) {

    const [fullLyricString, setFullLyricsString] = useState('')
    const [lyricArray, setLyricArray] = useState([])
    const [currentLine, setCurrentLine] = useState({});
    // make into state when add lyrics are dynamic; bring down as prop and useEffect

    if (fullLyricString == '') {
        setFullLyricsString(bennieAndTheJets);
    }


    //  setLyricArray(fullLyricString.split(/\r?\n/));

    // useEffect(() => {
    //     for (let i = 0; i < lyricArray.length; i++) {
    //         setCurrentLine(() => {
    //             currentLine.line = lyricArray[0]
    //             currentLine.lineId = i + 1;
    //         })
    //         console.log(currentLine)
    //     }


    const splitLyrics = (lyrics) => {
        const arr = lyrics.split(/\r?\n/);
        setLyricArray(arr);
    }


    useEffect(() => {


        return () => {
            second
        }
    }, [third])



    console.log(props)



    return (
        <>
            <div className="mainContainer">
                main container
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

export default MainContainer;