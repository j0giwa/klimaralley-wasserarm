import { useEffect } from "react"

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
	  <h1>test</h1>
	</div>
      </main>
    </>
  )
}

export default App
