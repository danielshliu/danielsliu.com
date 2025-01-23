"use client";

import { useRouter } from 'next/navigation';
import { AuroraBackground } from '@/components/ui/auroraBackground';
import { motion } from "framer-motion";
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function home(){

    const router = useRouter();
    
    return(
        <div>
            <div className=''>       
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 50 }}
                        whileInView={{ opacity: 2, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className='flex flex-row'>
                            <div className='flex mx-[10vh]'>
                                <div className='grid grid-col'>
                                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                                        Hi I'm Daniel!
                                    </div>

                                    <div className="font-extralight font-mono text-base md:text-4xl dark:text-neutral-200 py-4 ">
                                        I am a
                                        <TypewriterComponent
                                            options={{
                                                strings: ['Full-Stack Developer', 'Photographer', 'Volunteer'],
                                                autoStart: true,
                                                loop: true,
                                
                                            }}
                                            />
                                    </div>
                                </div>

                            </div>

                            <img src="/headShot.jpg" alt="headShot" className="w-[40vh] "/>
                          
                          
                        </div>
                        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                            Begin!
                        </button> */}
                    </motion.div>
                </AuroraBackground>
            </div>
            
            <div className = "flex flex-col h-screen bg-zinc-50 dark:bg-zinc-900 p-6 ">
                <div className='flex justify-center m-10 font-bold text-2xl'>
                    Working on the rest of my website! <br />
                    Be back soon!
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

        </div>
    );
}