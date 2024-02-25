import './screen.css'

import React from 'react'

const Screen = ({text,result}) => {
  return (
    <div className='calc-screen'>

        <div className='screen-result'>
            <h1>{result}</h1>
        </div>

        <div className='screen-text'>
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default Screen
