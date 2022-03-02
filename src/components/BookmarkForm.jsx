import { useState, useContext } from 'react'
import Card from '../utilities/Card'
import Button from '../utilities/Button'
import BookmarkContext from '../context/BookmarkContext'

function BookmarkForm() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    desc: '',
  })

  const { addBookmark } = useContext(BookmarkContext)

  const { name, website, desc } = formData

  const handleChange = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    const data = {
      name,
      website,
      desc,
    }
    if (data.name === '' && data.website === '' && data.desc === '') {
      console.log('fill the form')
    } else {
      addBookmark(data)
    }
    setFormData({
      name: '',
      website: '',
      desc: '',
    })
    e.preventDefault()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input onChange={handleChange} type="text" name="name" value={name} />
        </div>
        <div className="input-group">
          <label>Url</label>
          <input
            onChange={handleChange}
            type="url"
            name="website"
            value={website}
          />
        </div>
        <div className="input-group">
          <label>Desc</label>
          <input onChange={handleChange} type="text" name="desc" value={desc} />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

export default BookmarkForm
