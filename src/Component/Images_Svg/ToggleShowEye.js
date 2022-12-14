import React from 'react'
import IconEyeClose from './IconEyeClose'
import IconEyeShow from './IconEyeShow'
const ToggleShowEye = ({show=true, width, height, color}) => {
  return (
    <>
   { show === true ? 
    <IconEyeShow width={width} height={height} color={color} /> 
    : 
    <IconEyeClose width={width} height={height} color={color} />}
    </>
  )
}

export default ToggleShowEye;