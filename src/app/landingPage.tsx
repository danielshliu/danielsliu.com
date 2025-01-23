

import { useRouter } from 'next/navigation';



export default function LandingPage(){


    const router = useRouter();



    return(
        <div className = "flex flex-col h-screen bg-gray-600 p-6 ">
            <div className = "flex item-center justify-between mb-10">

                <h1 className="text-2xl fond-bold text-center text-black"> Hi I'm Daniel Liu</h1>
                <h1 className="text-2xl font-bold text-center text-black"> Welcome to my Website!</h1>
                <h1 className="text-2xl font-bold text-center text-black ">Temp...</h1>
            </div>

            <div className="flex justify-center">
                <div className="w-35 mr-6">
                    <div className="flex space-x-4 mb-4">
                        <button 
                        onClick = { () => router.push('/wordcount')}
                        className="flex w-[20vh] px-10 py-2 bg-blue-500 text-white rounded-lg justify-center"
                        > Word Counter
                        </button>
                    </div>
                </div>

                <div className="flex w-[40vh] h-[50vh] items-center justify-center shadow-2xl shadow-zinc-500 border-zinc-500 border-2 bg-gray-500 p-8 shadow-2xl rounded-lg">
                
                    
                    <img src="/SHIROOO.png" alt="Shiroballs" className="w-[40vh] "/>
                </div>
            </div>
        </div>
    );
}