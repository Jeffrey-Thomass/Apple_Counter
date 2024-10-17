import React from 'react'

export default function ({appleCount , basketName , title}) {
  return (
    <div className='apple-basket button' title={title}>
        <h1>
            <span>{appleCount}</span> apples
        </h1>
        <p>{basketName}</p>
        {/* {appleCount === 10 ? <p>basket full</p> : null } */}
        {/* or */}
        {appleCount === 10 && <p>basket full</p>}
        {appleCount === 0 ? <p>basket empty</p> : null }
    </div>
  )
}
