import React from 'react'

export default function BookmarksPage() {
  return (
    <section>
      <header className='header'>
        <span>Saved Contacts</span>
      </header>
      <div className='body'>
        <input type="search" className='search container-fluid' placeholder='Search...'></input>
      </div>
    </section>
  )
}
