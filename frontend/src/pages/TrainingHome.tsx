// import { useState } from 'react'
import { useTraining } from '../features/hooks/useTraining'
import { RecordForm } from '../components/RecordForm'
import { ProgressCircular } from '../components/ProgressCircular'
import { getLocalDateString } from '../utils/date'
import styles from './style/TrainingHome.module.css'

export const TrainingHome = () => {
  // 部位リスト、メニューリスト
  const { partDataList, menuDataList, recordDataList } = useTraining()
  // 記録フォームを管理
  // const [recordFormCount, setRecordFormCount] = useState(1)

  // // 記録フォームの追加ハンドラー
  // const handleAddForm = () => {
  //   setRecordFormCount(recordFormCount + 1)
  // }

  // // 記録フォームの削除ハンドラー
  // const handleRemoveForm = () => {
  //   setRecordFormCount(Math.max(1, recordFormCount - 1))
  // }

  const todayRecordList = recordDataList.filter(record => record.create_date === getLocalDateString())

  return (
    <div className="training-home">
      {partDataList.length === 0 || menuDataList.length === 0 ? (
        <ProgressCircular />
      ) :
      <>
      <RecordForm />
      {/* RecordFormを複数表示用 */}
      {/* {Array(recordFormCount).fill(0).map((_, index) => (
        <RecordForm key={index} />
      ))} */}
      {/* <div>
        <button onClick={handleRemoveForm}>➖</button>
        <button onClick={handleAddForm}>➕</button>
      </div> */}
      </>
      }
      <div className={styles.todayRecordContainer}>
      {todayRecordList.length > 0 && (
        <div className={styles.section}>
          {todayRecordList.map(record => (
            <>
            <div className={styles.partName} style={{ backgroundColor: record.part_master.part_color }}>
              {record.menu_master.menu_name}
            </div>
            <div className={styles.setDetail}>
              {record.set_detail.map(set => (
                <div key={set.current_set} className={styles.setRow}>
                  <div className={styles.setNumber}>{set.current_set}セット</div>
                  <div className={styles.setValues}>{set.weight}kg x {set.reps}回</div>
                </div>
              ))}
            </div>
            </>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}