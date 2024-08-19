import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import FrontDisplay from './FrontDisplay'
import Leaderboard from './Leaderboard'

function Home() {
  return (
    <div>
      <Top />
      <FrontDisplay />
      <Leaderboard />
      </div>
  )
}

export default Home