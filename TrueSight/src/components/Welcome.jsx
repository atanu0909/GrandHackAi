import React from 'react'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='text-white '>


            <div className='intro1 h-[100vh] flex justify-center flex-col pl-60 pr-60 pt-30'>
                <p className='text-8xl text-center'>
                    Power<span className='gradient-text'> Automative AI </span>With Your Data
                </p>
                <p className='text-2xl text-center py-20'>
                    Make the best models with the best data. Scale data engine leverages your enterprise data, and with GenAI Platform, safely unlocks your value with AI.
                </p>
                <button className="hover:border hover:border-1 relative overflow-hidden rounded-lg px-20 py-6 max-w-6 mx-auto">
                    <span class="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">Add Video</span>
                    <span aria-hidden className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
                </button>
            </div>

            <div className='  intro2 h-[100vh] flex flex-col gap-2 justify-between items-center pt-[90vh]'>
                <div className='px-20 pt-20 text-center'>
                    <p className='text-5xl'>Generative AI Architechture</p>
                    <p className="text-3xl">Whether youre building your own models or applying foundation model to your business, data remains the biggest setback to AI</p>
                </div>
                <div className='flex justify-between items-center pb-20'>
                    <div className="right max-w-[50%] pl-20 flex flex-col gap-4">
                        <p className='text-3xl font-bold'>Fine-Tuning & RLHF</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                        <p className='text-3xl font-bold'>Foundation Models</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                        <p className='text-3xl font-bold'>Enterprise Data</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                    </div>
                    <div className="left max-w-[50%] pr-20">
                        <img className='' src="ai.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
