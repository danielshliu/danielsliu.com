"use client";

import axios from 'axios';
import 'dotenv/config';
import { useState } from 'react';


interface PlayerData{
    id: string;
    name: string;
}


interface RankData{
    
}


export default function MyLeaugeStats(){
    const [summonerName,setSummonerName] = useState(''); 
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [rankedData, setRankedData] = useState<RankData[]>([]);


    return(
        <div>
            Bello!
        </div>
    );
}





