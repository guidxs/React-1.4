import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Rodape from './components/Rodape'
/**importando a biblioteca de efeitos e transições de slideshow
 * npm install swiper
 */
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/scrollbar'

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
