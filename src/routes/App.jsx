import { useState, useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = 'My Page Title';
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
