import axios from 'axios';

const RIOT_API_KEY = process.env.RIOT_API;

export async function getSummerGameNameAndTagLine(gamerName: string, tagLine: string){
    const response = await axios.get(`
        https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/teaapoo/${encodeURIComponent(tagLine)}?api_key=${RIOT_API_KEY}`);
    return response.data;
}

//AccountID
export async function getLevelandProfileIconID(){
    const response = await axios.get(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-account/HrWaCOkG2KTMP6L8sqnZzeJ4cb5J4jF2SQWQ5XueammcIw?api_key=${RIOT_API_KEY}`
    )
    return response.data;
}