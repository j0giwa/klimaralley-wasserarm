/**
 * Fruit Categorie UI Component
 * 
 * Provide the cathegorie of the Header
 * @author R. Walter Dongmepi W. & Marlon Schrader
 */


import React from "react";
import Searchbar from "../components/Searchbar";
import data from "../JS/data";
import Header from "../components/Header"

export default function CategorieFruit () {
    const categorieName = data.map(name => {
        return (
            <Searchbar 
                foodName={name}
            />
        )
    })
    return (
        
        <div className="bg-map-background">
            <Header/>
            {categorieName}
        </div>
    )
}