import { useEffect, useState } from 'react'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const cerrarLoader = loading ? '' : 'close-loader'
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <div className={`lds-ring loader ${cerrarLoader}`}><div /><div /><div /><div /></div>
  )
}

export default Loader
