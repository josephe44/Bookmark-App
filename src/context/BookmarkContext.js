import { createContext, useState } from 'react'
import BookmarkData from '../data/BookmarkData'
import { v4 as uuidv4 } from 'uuid'

const BookmarkContext = createContext()

export const BookmarkProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState(BookmarkData)

  // const fetchBookmarkData = () => {
  //   setBookmark()
  // }

  // Adding a Bookmark to the state
  const addBookmark = (data) => {
    data.id = uuidv4()
    setBookmark([data, ...bookmark])
    console.log(data)
  }

  return (
    <BookmarkContext.Provider
      value={{
        // Piece of state for Bookmark
        bookmark,

        // function
        addBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContext
