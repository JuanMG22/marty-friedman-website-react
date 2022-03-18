const GearCat = () => {
  return (
    <>
      <input
        className='gear__box--input'
        name='filtro'
        id='guitarras'
        type='radio'
        defaultChecked
      />
      <label className='gear__box--input guitarras' htmlFor='guitarras'>
        Guitarras
      </label>
      <input
        className='gear__box--input'
        name='filtro'
        id='amps'
        type='radio'
      />
      <label className='gear__box--input amps' htmlFor='amps'>
        Amps
      </label>
      <input
        className='gear__box--input'
        name='filtro'
        id='pickups'
        type='radio'
      />
      <label className='gear__box--input pickups' htmlFor='pickups'>
        Pickups
      </label>
      <input
        className='gear__box--input'
        name='filtro'
        id='pedales'
        type='radio'
      />
      <label className='gear__box--input pedales' htmlFor='pedales'>
        Pedales
      </label>
    </>
  )
}

export default GearCat
