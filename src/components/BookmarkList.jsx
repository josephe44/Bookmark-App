import { useContext } from 'react'
import BookmarkItem from './BookmarkItem'
import BookmarkContext from '../context/BookmarkContext'

function BookmarkList() {
  const { bookmark } = useContext(BookmarkContext)

  return (
    <div className="grid lg:grid-cols-4 md-4 md:grid-cols-2 place-items-center">
      {bookmark.map((data) => (
        <BookmarkItem key={data.id} data={data} />
      ))}
    </div>
  )
}

export default BookmarkList
