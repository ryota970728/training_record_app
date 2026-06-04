import { useTraining } from '../features/hooks/useTraining'
import styles from './style/TrainingReference.module.css'

export const TrainingReference = () => {
  // トレーニング記録リスト
  const { recordDataList } = useTraining()

  const groupedRecordData = recordDataList.reduce<Record<string, typeof recordDataList>>((acc, record) => {
    const date = record.create_date
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(record)
    return acc
  }, {})

  const sortedGroupedRecordData = Object.keys(groupedRecordData)
    .map((date) => ({
      create_date: date,
      records: groupedRecordData[date],
    }))
    .sort((a, b) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime())

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString)
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']
    return daysOfWeek[date.getDay()]
  }

  return (
    <div>
      {sortedGroupedRecordData.length > 0 ? (
        <>
        {sortedGroupedRecordData.map((group) => (
          <div key={group.create_date} className={styles.recordList}>
            {/* 日付 */}
            <div className={styles.createDate}>
              {group.create_date} ({getDayOfWeek(group.create_date)})
            </div>
            {group.records.map((record) => (
              <div key={record.record_id} className={styles.recordItem}>
                {/* 部位 */}
                <div className={styles.partName} style={{ backgroundColor: record.part_master.part_color, color: '#FFFFFF' }}>
                  {record.part_master.part_name}
                </div>
                <div className={styles.menuName}>
                  {record.menu_master.menu_name}
                </div>
                {/* セット */}
                <div className={styles.setDetail}>
                  {record.set_detail.map((set) => (
                    <div key={set.current_set}>
                      {set.weight}kg x {set.reps}回
                    </div>
                  ))}
                </div>
                {/* 備考 */}
                <div className={styles.note}>
                  {record.note}
                </div>
              </div>
            ))}
          </div>
        ))}
        </>
      ) : (
        <p>登録されたトレーニングはありません。</p>
      )}
    </div>
  )
}