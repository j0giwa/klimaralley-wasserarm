import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Story(){
    return (
        <div className="bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen">
            <Header />
           <Footer />
        </div>
    )
}

export default Story;