"use client";

import axios from 'axios';
import 'dotenv/config';
import { useState } from 'react';




export default function MyLeaugeStats(){
    const [input,setInput] = useState('');
    const [error,setError] = useState('');
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    


    const fetchStats = async () => {
        setError('');
        setData(null);

        if(!input.includes('#')){
            setError("Please include #")
            return;
        }

        setLoading(true);
        try{
            const res = await fetch (`/api/riot/${encodeURIComponent(input)}`);
            const result = await res.json();

            if(res.ok){
                setData(result);
            }else{
                setError(result.error || 'Faile to fetch data')
            }

        }catch(err){
            setError('Error occured while fetching data')
        }finally{
            setLoading(false);
        }

      
    }

    return(
        <div>
            <div className = "h-screen flex items-center justify-center">
                <div className='flex flex-col w-1/3'>
                    <div className='flex justify-center'> 
                        <h1>Riot User Stats</h1>
                    </div>

                    <div className='flex justify-center'>
                        <input
                            className='text-black border p-2 w-1/2 mb-2' 
                            type="text"
                            placeholder="Enter Game name + Game Tag"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            />
                    </div>

                    <div className='flex justify-center'>
                        <button
                            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700' 
                            onClick={fetchStats}
                            disabled={loading}
                            >
                            {loading? 'Loading..' : 'Fetch Stats'}
                        </button>
                    </div>

                    {error && <p className="flex justify-center text-red-500 mt-2 ">{error}</p>}

                    <div>
                    {data && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">{data.summoner.name}</h2>
                            <p>Level: {data.summoner.summonerLevel}</p>

                            <h3 className="mt-4 font-semibold">Top 3 Champions</h3>
                            <ul>
                                {data.championMastery.slice(0, 3).map((champ: any, index: number) => (
                                    <li key={index}>
                                    Champion ID: {champ.championId} — Points: {champ.championPoints}
                                </li>
                                ))}
                            </ul>

                            <h3 className="mt-4 font-semibold">Ranked</h3>
                            {data.rankedStats.length > 0 ? (
                                <p>
                                {data.rankedStats[0].tier} {data.rankedStats[0].rank} — {data.rankedStats[0].leaguePoints} LP
                                </p>
                            ) : (
                                <p>Unranked</p>
                            )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}





