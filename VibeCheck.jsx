import React from 'react';
import { Crown, Music, Palette, CupSoda, Play } from 'lucide-react';

export default function VibeCheck() {
    return (
        <div className="min-h-screen bg-[#E8ECEA] flex items-center justify-center p-4 font-sans">
            {/* 
        Background: Light Sage/Olive (#E8ECEA) 
        Font: Sans-Serif default, Serif for headings
      */}

            <div className="max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4F] text-center mb-12">
                    Kristina's Vibe
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Character */}
                    <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-[#4A5D4F]/10 rounded-full text-[#4A5D4F]">
                                <Crown size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif text-[#4A5D4F] mb-2">Character</h3>
                            <div className="w-full">
                                <p className="text-lg font-medium text-[#2C3A2F] mb-1">Holly Golightly</p>
                                <p className="text-sm text-[#6B7F70] italic">Breakfast at Tiffany's</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Song */}
                    <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-[#4A5D4F]/10 rounded-full text-[#4A5D4F]">
                                <Music size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif text-[#4A5D4F] mb-2">Song</h3>
                            <div className="w-full flex justify-center">
                                <button className="flex items-center gap-2 px-6 py-2 bg-[#4A5D4F] text-white rounded-full hover:bg-[#3A4A3E] transition-colors shadow-md">
                                    <Play size={16} fill="currentColor" />
                                    <span className="text-sm font-medium">Play</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Color */}
                    <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-[#4A5D4F]/10 rounded-full text-[#4A5D4F]">
                                <Palette size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif text-[#4A5D4F] mb-2">Color</h3>
                            <div className="w-full flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-[#808000] border-4 border-white shadow-sm mb-2" title="Olive Green"></div>
                                <p className="text-lg font-medium text-[#2C3A2F]">Olive Green</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Drink */}
                    <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-[#4A5D4F]/10 rounded-full text-[#4A5D4F]">
                                <CupSoda size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif text-[#4A5D4F] mb-2">Drink</h3>
                            <div className="w-full">
                                <p className="text-lg font-medium text-[#2C3A2F] mb-1">Blueberry Galaxy</p>
                                <p className="text-sm text-[#6B7F70] italic">by Organic Blendz</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
