import { useEffect } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gemuese from "../../public/images/Gemuese.jpg"
import Obst from "../../public/images/Obst.jpg"
import Nuesse from "../../public/images/Nuesse.jpg"
import milchprodukte from "../../public/images/milchprodukte.jpg"
import fleich_und_gefluegel from "../../public/images/fleich_und_gefluegel.jpg"
import fisch_und_meersfruechte from "../../public/images/fisch_und_meersfruechte.jpeg"
import cake from "../../public/images/cake.jpg"
import meat from "../../public/images/meat.jpg"
import salad from "../../public/images/salad.jpg"


/**
 * Index Page 
 */
function App() {

  useEffect(() => {
    document.title = 'Wasserarmsatt';
  }, [])

  return (
    <div className="bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover h-screen">
      <header>
        <Header />
      </header>
      <main>
        <div className="container container-main mx-auto mt-28 md:px-5 px-3">
          <div className="py-3">
            <span className="text-xl text-base-content font-bold"> Kategorien </span>
            <ul className="flex justify-between text-base-content items-center gap-4 pt-4">
              <li>
                <a href="" className="flex flex-col">
                  <img src={Obst} alt="image of fruit" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span>Obst</span>
                </a>
              </li>
              <li>
                <a href="" className="items-center">
                  <img src={Gemuese} alt="image of vegetable" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span>Gemüse</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Nuesse} alt="image of nuts" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span>Nüsse</span>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center">
                  <img src={fleich_und_gefluegel} alt="image of meat and poultry" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span>Fleisch und Geflügel</span>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center">
                  <img src={fisch_und_meersfruechte} alt="image of fish" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span className="flex-wrap">Fisch und Meeresfrüchte</span>
                </a>
              </li>
              <li className=" items-center">
                <a href="" className="flex flex-col items-center">
                  <img src={milchprodukte} alt="image of milk product" className="rounded-full w-12 h-12 grow-0 shrink-0"/>
                  <span>Milchprodulte</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xl text-base-content font-bold">Vorschläge</span>
            <div className="flex flex-col justify-between gap-4 pt-4">
              <div><img src={meat} alt="image of meat" className="w-full h-52"/></div>
              <div><img src={cake} alt="image of cake" className="w-full h-52"/></div>
              <div><img src={salad} alt="image of salad" className="w-full h-52"/></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
