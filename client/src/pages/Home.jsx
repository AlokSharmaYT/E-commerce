import React from 'react'
import Card from '../components/Card'
import './Home.css'

export default function Home() {
  return (
    <>
      <header className="navbar">

        {/* guide for the developer */}
        {/* created fields accoring to general overview of an ecommerce website */}
        <div className="logo">logo</div>
        <div className="searchbar">search</div>
        <div className="cart">cart logo</div>
      </header>
      <main className="main">
        products here
        {/* guide for the developer */}
        {/* render components from the source /components/cards */}
        {/* <card/> <-- import card component */}
        {/* reuse the card component for rendering multiple products like phone, clothes */}
      </main>
      <footer className="footer">
        footer here
      </footer>
    
    </>
  )
}
