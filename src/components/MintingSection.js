import React from 'react'
import MintingImage from '../assets/images/Minting Image.png'

function MintingSection() {
    return (
        <div className="flex justify-center">
            <div className="text-center max-w-xs md:max-w-[403px] border-[6px] border-dark pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 rounded-xl relative">
                <div className="flex justify-center">
                    <img src={MintingImage} className="w-4/12 md:w-auto rounded-full absolute -top-[3.5rem] md:-top-[4.5rem] border-[6px] border-dark" alt="MintingImage" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Get Your Headbox</h2>
                <p className="mt-4 text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <div className="flex flex-col items-center mt-8 md:mt-12">
                    <div className="flex items-center space-x-5">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 fill-current text-gray-300 hover:text-gray-400 transition-all duration-300 ease-in-out cursor-pointer"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="text-3xl font-bold">1</span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 fill-current text-primary hover:text-violet-800 cursor-pointer transition-all duration-300 ease-in-out"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <button className="bg-primary hover:bg-violet-800 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-primary/30 mt-8 md:mt-12">
                        Mint
                    </button>
                    <span className="mt-8 font-semibold text-primary text-sm md:text-base">100 / 8888 items has minted.</span>
                </div>
            </div>
        </div>
    )
}

export default MintingSection
