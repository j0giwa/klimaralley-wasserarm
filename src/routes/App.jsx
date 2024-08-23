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
        <div className="container container-main mx-auto mt-56 md:px-5">
          <span> Kategorien </span>
          <span>Hello</span>
        </div>
        <span>hallo</span>
      </main>
      <Footer />
    </div>
  )
}

export default App;
