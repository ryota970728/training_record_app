import { useNavigate } from "react-router-dom"
import style from "./style/Footer.module.css"

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className={style.recordFooterContainer}>
      <button onClick={() => navigate('/training-home')} className={style.footerItem}>
        <div className={style.linkImg + ' ' + style.recordImg} />
        <span className={style.titleText}>ホーム</span>
      </button>
      {/* <button onClick={() => navigate('/training-record')}>トレーニング記録</button> */}
      <button onClick={() => navigate('/training-reference')} className={style.footerItem}>
      <div className={style.linkImg + ' ' + style.referenceImg} />
        <span className={style.titleText}>記録一覧</span>
      </button>
      <button onClick={() => navigate('/training-search')} className={style.footerItem}>
        <div className={style.linkImg + ' ' + style.searchImg} />
        <span className={style.titleText}>検索</span>
      </button>
    </footer>
  )
}

export default Footer