import React from 'react'
import Card from '../utilities/Card'

function BookmarkItem({ data }) {
  return (
    <Card>
      <div>
        <p>{data.name}</p>
        <p>{data.website}</p>
        <p>{data.desc}</p>
      </div>
    </Card>
  )
}

export default BookmarkItem
