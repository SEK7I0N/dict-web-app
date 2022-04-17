
import React from 'react';
export const WordTile = ({  meanings , phonetics,details}) => {
	// console.log(`phonetics: ${phonetics}`);
	// console.log(`phonetics: ${JSON.stringify(phonetics)}`);
	const {word,license:{name,url},sourceUrls} = details;
		
  return (
    <div className=' bg-blue-800 shadow-xl'> 
	<br/>
	
	
	<br/>
	<div className=' bg-blue-700  mx-4'>
	{meanings.map((meaning, index) => {
		const { antonyms, definitions, partOfSpeech, synonyms } = meaning;
		console.log(`antonyms: ${antonyms}\ndefinitions: ${definitions}\npartOfSpeech: ${partOfSpeech}\nsynonyms: ${synonyms}`);
		return (
			
		<div key={index} className='px-4 py-8 bg-blue-700 my-4 shadow-2xl'>
			
			<span className='text-white italic font-sans font-family:Segoe UI antialiased font-bold text-2xl hover:text-gray-700 '>
			{word}
			</span>
			{!!partOfSpeech && !!Object.keys(partOfSpeech).length &&
			<span  className='px-2 font-small text-gray-100 italic'>
			({partOfSpeech})
			</span>}
			

			{!!definitions && !!Object.keys(definitions).length &&
			<div className='text-white'>
			{definitions.map((def, index) => {
				const {antonyms, definition, example, synonyms} = def;
				// console.log(`antonyms: ${antonyms}\n!!antonyms: ${!!antonyms}\n typeof antonyms: ${typeof(antonyms)} length antonyms: ${Object.keys(antonyms).length}\
				// definition: ${definition}\n!!definition: ${!!definition}\
				// example: ${example}\n!!example: ${!!example}\
				// synonyms: ${synonyms}\n!!synonyms: ${!!synonyms}`);
				return (
					<div key={index} >
						{!!definition && !!Object.keys(definition).length  &&
						<div>
						{definition}
						</div>}
						{!!example && !!Object.keys(example).length  &&
						<div>
						{example}
						</div>}
						
						{!!synonyms && !!Object.keys(synonyms).length  &&
						<div>
						synonyms: {synonyms.map((synonym, index) => {
							return (
								<span key={index}>
									{synonym + ', '}
								</span>
							)})}
						</div>}
						{!!antonyms && !!Object.keys(antonyms).length  &&
						<div>
						antonyms: {antonyms.map((antonym, index) => {
							return (
								<span key={index}>
									{antonym + ', '}
								</span>
							)})}
						</div>}
						
					</div>
				)
			})}
			</div>}
			
			{!!synonyms && !!Object.keys(synonyms).length &&
			<div className='text-white'>
			Synonyms: {synonyms.map((synonym, index) => {
				return (
					<span key={index}>
						{synonym + ', '}
						
					</span>
				)
			})}.
			</div>}
			{!!antonyms && !!Object.keys(antonyms).length &&
			<div className='text-white'>
			Antonyms: {antonyms.map((antonym, index) => {
				return (
					<span key={index}>
						{antonym} ,
					</span>
				)
			})}.
			</div>}
		</div>
		)
	})}
	</div>
	</div>
  )
}
