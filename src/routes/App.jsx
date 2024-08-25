import { useEffect } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Index Page 
 */
function App() {

  useEffect(() => {
    document.title = 'Wasserarmsatt';
  }, [])

  return (
    <div className="bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen">
      <header>
        <Header />
      </header>
      <main>
        <div className="container container-main mx-auto mt-56 md:px-5 px-3">
          <span className="text-xl"> Kategorien </span>
          <ul className="flex justify-between">
            <li><a href="">Obst</a></li>
            <li><a href="">Gemüse</a></li>
            <li><a href="">Nüsse</a></li>
            <li><a href="">Fleisch & Geflügel</a></li>
            <li><a href="">Fisch & Meeresfrüchte</a></li>
            <li><a href="">Milchprodulte</a></li>
          </ul>
        </div>
        <span>hallo</span>
      </main>
      <Footer />
    </div>
  )
}

export default App;
