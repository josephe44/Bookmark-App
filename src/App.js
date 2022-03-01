import React from 'react'
import Home from './pages/Home'
import { BookmarkProvider } from './context/BookmarkContext'

function App() {
  return (
    <BookmarkProvider>
      <Home />
    </BookmarkProvider>
  )
}

export default App
