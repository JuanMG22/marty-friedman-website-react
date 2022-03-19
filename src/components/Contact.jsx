import * as Scroll from 'react-scroll'

const Contact = () => {
  const Element = Scroll.Element
  return (
    <Element name='contact-section' className='contact'>
      <div data-aos='fade-up'>
        <h2 className='contact__heading'>
          <span className='contact__heading--span'>Contacto</span>
        </h2>
        <form className='contact__form' data-aos='fade-up' data-aos-delay='300'>
          <label className='contact__form--label' htmlFor='nombre'>Nombre</label>
          <input className='contact__form--nombre' type='text' id='nombre' name='nombre' placeholder='Tu nombre' required />
          <label className='contact__form--label' htmlFor='email'>Email</label>
          <input className='contact__form--email' id='email' type='email' name='email' placeholder='Tu email' required />
          <label className='contact__form--label' htmlFor='pais'>País</label>
          <select className='contact__form--pais' id='pais' name='pais' defaultValue='Argentina'>
            <option name='Afganistan'>Afganistan</option>
            <option name='Albania'>Albania</option>
            <option name='Alemania'>Alemania</option>
            <option name='Andorra'>Andorra</option>
            <option name='Argentina'>Argentina</option>
            <option name='Bolivia'>Bolivia</option>
            <option name='Bosnia'>Bosnia</option>
            v<option name='Botsuana'>Botsuana</option>
            <option name='Brasil'>Brasil</option>
            <option name='Canadá'>Canadá</option>
            <option name='República Checa'>Catar</option>
            <option name='Chile'>Chile</option>
            <option name='China'>China</option>
            <option name='Colombia'>Colombia</option>
            <option name='Corea del Sur'>Corea del Sur</option>
            <option name='Costa Rica'>Costa Rica</option>
            <option name='Croacia'>Croacia</option>
            <option name='Dinamarca'>Dinamarca</option>
            <option name='Ecuador'>Ecuador</option>
            <option name='Egipto'>Egipto</option>
            <option name='España'>España</option>
            <option name='Estados Unidos'>Estados Unidos</option>
            <option name='Filipinas'>Filipinas</option>
            <option name='Grecia'>Grecia</option>
            <option name='Guatemala'>Guatemala</option>
            <option name='Haití'>Haití</option>
            <option name='Honduras'>Honduras</option>
            <option name='India'>India</option>
            <option name='Isreal'>Isreal</option>
            <option name='Italia'>Italia</option>
            <option name='Japón'>Japón</option>
            <option name='Liechtenstein'>Liechtenstein</option>
            <option name='Marruecos'>Marruecos</option>
            <option name='Nicaragua'>Nicaragua</option>
            <option name='Noruega'>Noruega</option>
            <option name='Paraguay'>Paraguay</option>
            <option name='Perú'>Perú</option>
            <option name='Reino Unido'>Reino Unido</option>
            <option name='RusiaC'>Rusia</option>
            <option name='Sudán del Sur'>Sudán del Sur</option>
            <option name='Uruguay'>Uruguay</option>
            <option name='Venezuela'>Venezuela</option>
            <option name='Zimbabue'>Zimbabue</option>
          </select>
          <div className='contact__form--newsletter-box'>
            <label htmlFor='newsletter'>Newsletter?</label>
            <input id='newsletter' className='contact__form--newsletter' type='checkbox' name='acepta' value='1' />
          </div>
          <label htmlFor='comentarios'>Dejanos un mensaje</label>
          <textarea
            className='contact__form--textarea' id='comentarios' name='consulta' rows='10' cols='40'
            placeholder='Tu mensaje'
          />

          <input className='contact__form--enviar btn btn-full' type='submit' value='Enviar!' />
        </form>
      </div>
    </Element>
  )
}

export default Contact
