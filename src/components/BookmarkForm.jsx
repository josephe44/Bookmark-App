import { useState, useContext } from 'react'
import Button from '../utilities/Button'
import BookmarkContext from '../context/BookmarkContext'

function BookmarkForm() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    desc: '',
  })
  const [message, setMessage] = useState('')

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
      setMessage('Please fill the form')
    } else if (name.length <= 8 && desc.length <= 80) {
      setMessage(`${name} must be 10 character & ${desc} up to 80 character`)
    } else {
      setMessage(null)
      addBookmark(data)
    }
    setFormData({
      name: '',
      website: '',
      desc: '',
    })
    e.preventDefault()
  }

  if (setMessage) {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div className="mb-10 max-w-xl container mx-auto card shadow-xl py-5 px-5">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">NAME</span>
          </label>
          <label className="input-group">
            <span className="label-text">WEB</span>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={name}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">URL</span>
          </label>
          <label className="input-group">
            <span className="label-text">LINK</span>
            <input
              onChange={handleChange}
              type="url"
              name="website"
              className="input input-bordered w-full"
              value={website}
            />
          </label>
        </div>
        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text">DESCRIPTION</span>
          </label>
          <label className="input-group">
            <span className="label-text">DESC</span>
            <input
              onChange={handleChange}
              type="text"
              name="desc"
              className="input input-bordered w-full"
              value={desc}
            />
          </label>
        </div>

        <Button type="submit">Submit</Button>
        {message && (
          <div className="alert alert-error shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default BookmarkForm
