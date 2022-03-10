import React from 'react'
import Header from '../components/Header'
import BookmarkForm from '../components/BookmarkForm'
import BookmarkList from '../components/BookmarkList'

function Home() {
  return (
    <div className="container mx-auto px-3 pb-12">
      <Header />
      <BookmarkForm />
      <BookmarkList />
    </div>
  )
}

export default Home
