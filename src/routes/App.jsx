import { useEffect } from "react"
import HeaderFoodCategories  from "../components/Searchbar";
import CategorieFruit from "./CategorieFruit";
/**
 * Index Page 
 */
function App() {
  useEffect(() => {
    document.title = 'Wasserarmsatt';
  }, [])

  return (
    <main>
      <div className="container mx-auto">
        <CategorieFruit />
      </div>
    </main>
  )
}

export default App
