import style from './style/ProgressCircular.module.css'

export const ProgressCircular = () => {
  return (
    <div className={style.overlay}>
      <div className={style.loader} role="status" aria-label="読み込み中" />
    </div>
  )
}

export default ProgressCircular
