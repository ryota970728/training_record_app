import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import style from './style/Layout.module.css'

export const Layout = () => {
  return (
    <div className="layout">
      <div className={style.header}>
        <Header />
      </div>
      <main className={style.main}>
        <Outlet />
      </main>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}
