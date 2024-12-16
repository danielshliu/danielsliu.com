"use client";

import {useState} from 'react';


export default function Wordcount(){

    const [text, setText] = useState<string>('');
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCcount] = useState<number>(0);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = event.target.value;
        setText(inputText);
        setCharacterCount(inputText.length);

        const wordsArray = inputText.trim().split(/\s+/).filter(Boolean);
        setWordCcount(wordsArray.length);
    };

    

    return(
        <div className = "flex flex-col h-screen bg-gray-600 p-6">
            <div className='flex justify-center w-ful'>
                <div className='w-3/4 rounded-lg border border-gray'>

                    <textarea
                        value = {text}
                        onChange = {handleTextChange}
                        placeholder='Type Here!'
                        className='w-full h-full rounded-lg border border-gray-300 p-4 bg-gray-300 text-black'
                        />

                </div>
            </div>

            <div className='flex item-center justify-center h-screen'>
                <div className='flex flex-col text-center'>

                    <p className=''>Character Count: {characterCount}</p>
                    <p>Word Count: {wordCount}</p>

                </div>
            </div>
            Add WPM
        </div>
    );
}