import { useEffect } from "react"
import Header_Fruits  from "../components/Header_Fruits";
/**
 * Index Page 
 */
function App() {
  useEffect(() => {
    document.title = 'Wasserarmsatt';
  }, [])

  return (
    <>
      <main>
        <div className="container">
          <Header_Fruits />
        </div>
      </main>
    </>
  )
}

export default App
