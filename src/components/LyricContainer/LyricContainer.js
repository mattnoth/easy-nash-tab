import React from 'react';

function LyricContainer({ lyrics }) {
	// <span id=5>Word</span>

	console.log('lyrics');
	return <div className='lyricContainer'> {lyrics}</div>;
}

export default LyricContainer;
