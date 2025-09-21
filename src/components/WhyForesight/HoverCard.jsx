import React from 'react'

function HoverCard({item}) {

  return (
    <div className='hover_card flex justify-between align-middle'>
        <h3 className='hoverd_heading py-11' >{item.heading}</h3>
    </div>
  )
}

export default HoverCard