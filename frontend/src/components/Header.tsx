
import style from "./style/Header.module.css"

export const Header = () => {

  return (
    <header className={style.headerContainer}>
      <div className={style.headerTitle}>トレーニング記録</div>
    </header>
  )
}

export default Header