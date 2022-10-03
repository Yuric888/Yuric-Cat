import React from 'react'

const IconDelete = ({
    width=56, 
    height=72,
    color="black"
    }) => {
  return (
    <svg style={{cursor: 'pointer'}} width={width} height={height} viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 64C4 68.4 7.6 72 12 72H44C48.4 72 52 68.4 52 64V16H4V64ZM56 4H42L38 0H18L14 4H0V12H56V4Z" 
  fill={color} />
</svg>

  )
}

export default IconDelete