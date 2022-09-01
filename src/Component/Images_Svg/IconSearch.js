const IconSearch = (
    {width="24", 
    height="24", 
    color="black", 
}) => {
  return (
    <svg style={{cursor: 'pointer'}} width={width} height={height} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 44H46.84L45.72 42.92C49.64 38.36 52 32.44 52 26C52 11.64 40.36 0 26 0C11.64 0 0 11.64 0 26C0 40.36 11.64 52 26 52C32.44 52 38.36 49.64 42.92 45.72L44 46.84V50L64 69.96L69.96 64L50 44V44ZM26 44C16.04 44 8 35.96 8 26C8 16.04 16.04 8 26 8C35.96 8 44 16.04 44 26C44 35.96 35.96 44 26 44Z" 
  fill={color} />
</svg>


  )
}

export default IconSearch