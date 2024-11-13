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
        <div>
            <div>

                <textarea
                    value = {text}
                    onChange = {handleTextChange}
                    placeholder='Type Here!'
                    className='r-20 c-80'
                    />
                <p>Character Count: {characterCount}</p>
                <p>Word Count: {wordCount}</p>

            </div>
        </div>
    );
}