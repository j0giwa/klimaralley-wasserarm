/**
 * Header Searchbar UI Component
 * 
 * Provide the searchbar
 * @author R. Walter Dongmepi W.
 */

import React from "react";
import search_icon from "../../public/images/search_icon.svg"

export default function Searchbar (props) {
    return (
            <div className="bg-[#6CA96C]/60 backdrop-blur-3xl w-full flex fixed z-10 flex-col gap-2.5 px-4 pb-6 ">
                <details className="dropdown">
                    <summary className="btn m-1 bg-inherit border-none text-[#E0FFD7] font-semibold text-[23px]">{props.foodName.categories.hfruits}</summary>
                    <ul className="menu dropdown-content bg-[#6CA96C]/60 backdrop-blur-3xl rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Obst</a></li>
                        <li><a>Gemüse</a></li>
                        <li><a>Nüsse</a></li>
                        <li><a>Fleisch und Geflügel</a></li>
                        <li><a>Fisch und Meeresfrüchte</a></li>
                        <li><a>Milchprodukte</a></li>
                    </ul>
                </details>
                <div className="flex justify-between">
                    <button><img src={search_icon} alt="search icon" className="absolute end-10 bottom-9" /></button>
                    <input type="search" name="search-fruits" id="" placeholder="Search" className="w-full h-12 rounded-full bg-[#E5F0FF]/60 text-[#E0FFD7] placeholder-[#E0FFD7] pl-6 pr-10"/>
                </div>
            </div> 
    )
}