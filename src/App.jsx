import './sass/reset.scss'
import './app.scss'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
