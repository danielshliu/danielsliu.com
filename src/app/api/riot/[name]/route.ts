import type { NextApiRequest, NextApiResponse } from "next";
import {getLevelandProfileIconID, getSummerGameNameAndTagLine} from '@/lib/riotAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const profileIconID = "";
    const level = "";

    const fullName = req.query.name as string;
    const [gamerName, tagLine ] = fullName.split('#');
    
    if( !gamerName || !tagLine ){
        return res.status(400).json({error: 'Missing or Invalid gamerName or gamerTag' });
    }
    
    try{
        const summonerData = await getSummerGameNameAndTagLine(gamerName,tagLine);
        

        res.status(200).json({
            summonerData: summonerData
        });
    }catch(error:any){
        console.log(error.response?.data || error.message);
        res.status(500).json({error: 'Error fetching ddata from Riot'});
    }
}
