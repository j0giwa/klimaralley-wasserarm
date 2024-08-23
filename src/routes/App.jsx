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
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container mx-auto bg-base-200">
          test
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
