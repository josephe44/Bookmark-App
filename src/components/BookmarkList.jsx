import { useContext } from 'react'
import BookmarkItem from './BookmarkItem'
import BookmarkContext from '../context/BookmarkContext'

function BookmarkList() {
  const { bookmark } = useContext(BookmarkContext)

  return (
    <div className="grid">
      {bookmark.map((data) => (
        <BookmarkItem key={data.id} data={data} />
      ))}
    </div>
  )
}

export default BookmarkList
