import axios from 'axios';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { WordTile } from '../WordTile/WordTile';

const word_meanings_url = 'http://127.0.0.1:8000/word_meanings/';
const word_phonetics_url = 'http://127.0.0.1:8000/word_phonetics/';
const word_details_url = 'http://127.0.0.1:8000/word_details/';


export const Dictionary = () => {
    const [word, setWord] = useState('');
    
    const [meanings, setMeanings] = useState([]);
    const [phonetics, setPhonetics] = useState([]);
    const [details, setDetails] = useState([]);
    const handleChange = (e) => {
        setWord(e.target.value);
    }
    const handleSubmit = () => {
    axios.get(`${word_meanings_url}${word}`).then(res => {
        // console.log(JSON.parse(res.data));
        setMeanings(JSON.parse(res.data))}).catch(err => {console.log(err)});
	axios.get(`${word_phonetics_url}${word}`).then(res => {
        // console.log(JSON.parse(res.data));
        setPhonetics(JSON.parse(res.data))}).catch(err => {console.log(err)});
	axios.get(`${word_details_url}${word}`).then(res => {
    
	      console.log(`details: ${res.data}`);
        // console.log(JSON.parse(res.data));
        setDetails(JSON.parse(res.data))}).catch(err => {console.log(err)});
    }
    // console.log(`Word: ${word}\nmeanings: ${meanings}`);
    !!meanings.meanings && !!meanings.meanings.length && console.log(`!!meanings.meanings : ${!!meanings.meanings.length}`);
    console.log(`!!phonetics.phonetics : ${!!phonetics.phonetics}`);
    console.log(`!!details.details : ${!!details.details}`);
    // console.log(`meanings.meanings ${typeof(meanings)}`);
    // !!meanings.meanings && !!meanings.meanings.length && console.log(`!!meanings.meanings.length ${!!meanings.meanings.length}`);
    const onEnterKey=(event)=> {
        if (event.keyCode === 13) {
            handleSubmit();
        }
        }
    
  return (
    <div >
    <div className='py-2 drop-shadow-2xl'>

      <div className='px-2 flex items-center border-1 bg-white shadow-sm rounded-full'>
        
        <input type="text" placeholder='Word' value={word} onChange={handleChange}  onKeyDown={(e) => onEnterKey(e) }
        className=' rounded-l-sm w-full mx-2 py-1  text-gray-700 leading-tight focus:outline-none'
        />
        <div className='p-2'>
        <button
        className='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center' 
        onClick={()=> {handleSubmit()}}
        >
          <FaSearch />
          </button>
        
        </div>
       
        </div>
        
    </div>
    {!!meanings.meanings && !!phonetics.phonetics && !!details.details 
    && meanings.meanings !=="No Word Found"  && phonetics.phonetics  !=="No Word Found"  && details.details  !=="No Word Found" 
    && !!meanings.meanings.length && !!phonetics.phonetics && !!details.details 
    && <WordTile  meanings={meanings.meanings} phonetics={phonetics.phonetics} details={details.details}/>}
    {meanings.meanings ==="No Word Found"  && phonetics.phonetics  ==="No Word Found"  && details.details  ==="No Word Found" 
    && <h1 className='text-white'>No Word Found</h1> }
    
    </div>
  )
}


    