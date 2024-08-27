import React from 'react'
import FrontDisplay from './FrontDisplay'
import Leaderboard from './Leaderboard'
import Sports from './Sports'

function Home() {
  return (
    <div>
      <FrontDisplay />
      <div className="site-wrap">
        <Sports />
      </div>
      <Leaderboard />
      </div>
  )
}

export default Home