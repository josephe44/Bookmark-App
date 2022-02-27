import React from 'react'
import Card from '../utilities/Card'
import Button from '../utilities/Button'

function BookmarkForm() {
  return (
    <Card>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="website">Website: </label>
          <input type="text" id="website" />
        </div>
        <div className="input-group">
          <label htmlFor="desc">Desc: </label>
          <input type="text" id="desc" />
        </div>
        <Button>Submit</Button>
      </form>
    </Card>
  )
}

export default BookmarkForm
