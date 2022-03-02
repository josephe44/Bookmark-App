import React from 'react'
import Card from '../utilities/Card'

function BookmarkItem({ data }) {
  return (
    <Card>
      <div className="bookmark">
        <div>
          <h5>{data.name}</h5>
          <a href={`${data.website}`} target="_blank" rel="noreferrer">
            vist
          </a>
        </div>
        <p>{data.desc}</p>
      </div>
    </Card>
  )
}

export default BookmarkItem
