import React, { useState } from 'react'

const FeedbackStats = ({data}) => {
    let k = data.reduce((total , i ) => {return total + i.rating},0) /data.length
    k= (Math.round(k * 10) / 10).toFixed(1)
  return (
    <div className='feedback-stats'>
      <h4 style={{flexGrow: 1}}>Total Reviews <span style={{color:'#ff6a95'}} >{data.length}</span></h4>
          <h4 >Average rating  <span style={{color:'#ff6a95'}} >{isNaN(k) ? 0 : k}</span></h4>
    </div>
  )
}

export default FeedbackStats
