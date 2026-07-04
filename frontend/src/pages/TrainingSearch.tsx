import { useTraining } from '../features/hooks/useTraining'
import styles from './style/TrainingSearch.module.css'
import { useAtom } from 'jotai'
import {
  searchSelectedPartIdAtom,
  searchSelectedMenuNameAtom,
  searchPartNameAtom,
  searchFilterRecordListAtom,
  searchNumberStrAtom,
} from '../features/atoms/trainingAtom'
import { PartRadioButton } from '../components/PartRadioButton'

export const TrainingSearch = () => {
  const { partDataList, menuDataList, recordDataList } = useTraining()
  const [searchSelectedPartId, setSearchSelectedPartId] = useAtom(searchSelectedPartIdAtom)
  const [searchSelectedMenuName, setSearchSelectedMenuName] = useAtom(searchSelectedMenuNameAtom)
  const [searchPartName, setSearchPartName] = useAtom(searchPartNameAtom)
  const [searchFilterRecordList, setSearchFilterRecordList] = useAtom(searchFilterRecordListAtom)
  const [searchNumberStr, setSearchNumberStr] = useAtom(searchNumberStrAtom)

  // 選択された部位に基づいてメニューリストをフィルタリング
  const filteredMenuList = menuDataList?.filter((menu) => menu.part_id === searchSelectedPartId) ?? []

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString)
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']
    return daysOfWeek[date.getDay()]
  }

  const handleSearch = () => {
    if (!searchSelectedMenuName) {
      alert('メニューを選択してください')
      return
    }

    const filteredList = recordDataList
      .filter((record) => record.menu_master.menu_name === searchSelectedMenuName)
      .sort((a, b) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime())

    setSearchPartName(searchSelectedMenuName)
    setSearchFilterRecordList(filteredList)
    setSearchNumberStr(`：${filteredList.length}件`)
  }

  return (
    <div className={styles.trainingSearch}>
      <div className={styles.searchAreaWrapper}>
        <div className={styles.partContainer}>
          {partDataList.map((part) => (
            <PartRadioButton
              key={part.part_id}
              name="search-part"
              part={part}
              selectedPartId={searchSelectedPartId}
              onChange={(partId) => {
                setSearchSelectedPartId(partId)
                setSearchSelectedMenuName('')
                setSearchPartName('')
                setSearchNumberStr('')
                setSearchFilterRecordList([])
              }}
            />
          ))}
        </div>
        <div className={styles.menuContainer}>
          <select
            className={styles.menuSelect}
            value={searchSelectedMenuName}
            onChange={(e) => setSearchSelectedMenuName(e.target.value)}
          >
            <option disabled value="">
              選択してください
            </option>
            {filteredMenuList.map((menu) => (
              <option key={menu.menu_id} value={menu.menu_name}>
                {menu.menu_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className={styles.searchButton} onClick={handleSearch}>
            検索
          </button>
        </div>
      </div>

      <div className={styles.searchResultWrapper}>
        <div className={styles.searchResultTitle} style={{ backgroundColor: partDataList.find((p) => p.part_id === searchSelectedPartId)?.part_color || '#ccc', color: '#FFFFFF' }}>
          {searchPartName} {searchNumberStr}
        </div>

        {searchFilterRecordList.length > 0 ? (
          searchFilterRecordList.map((record) => (
            <div key={record.record_id} className={styles.searchResultContainer}>
              <div className={styles.createDate}>
                {record.create_date} ({getDayOfWeek(record.create_date)})
              </div>
              <div className={styles.note}>{record.note}</div>
              <div className={styles.setDetail}>
                {record.set_detail.map((sets) => (
                  <div key={sets.current_set}>
                    {sets.weight}kg x {sets.reps}回
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          searchPartName && <p>該当するデータが見つかりませんでした。</p>
        )}
      </div>
    </div>
  )
}