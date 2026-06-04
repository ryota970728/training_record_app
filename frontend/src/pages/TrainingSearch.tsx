import { useTraining } from '../features/hooks/useTraining'
import styles from './style/TrainingSearch.module.css'
import { useAtom } from 'jotai'
import {
  selectedPartIdAtom,
  selectedMenuNameAtom,
  searchPartNameAtom,
  filterRecordListAtom,
  searchNumberStrAtom,
} from '../features/atoms/trainingAtom'

export const TrainingSearch = () => {
  const { partDataList, menuDataList, recordDataList } = useTraining()
  const [selectedPartId, setSelectedPartId] = useAtom(selectedPartIdAtom)
  const [selectedMenuName, setSelectedMenuName] = useAtom(selectedMenuNameAtom)
  const [searchPartName, setSearchPartName] = useAtom(searchPartNameAtom)
  const [filterRecordList, setFilterRecordList] = useAtom(filterRecordListAtom)
  const [searchNumberStr, setSearchNumberStr] = useAtom(searchNumberStrAtom)

  // 選択された部位に基づいてメニューリストをフィルタリング
  const filteredMenuList = menuDataList?.filter((menu) => menu.part_id === selectedPartId) ?? []

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString)
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']
    return daysOfWeek[date.getDay()]
  }

  const handleSearch = () => {
    if (!selectedMenuName) {
      alert('メニューを選択してください')
      return
    }

    const filteredList = recordDataList
      .filter((record) => record.menu_master.menu_name === selectedMenuName)
      .sort((a, b) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime())

    setSearchPartName(selectedMenuName)
    setFilterRecordList(filteredList)
    setSearchNumberStr(`：${filteredList.length}件`)
  }

  return (
    <div className={styles.trainingSearch}>
      <div className={styles.searchAreaWrapper}>
        <div className={styles.partContainer}>
          {partDataList.map((part) => (
            <label className={styles.partRadio} key={part.part_id}>
              <input
                type="radio"
                value={part.part_id}
                checked={selectedPartId === part.part_id}
                onChange={() => setSelectedPartId(part.part_id)}
              />
              {part.part_name}
            </label>
          ))}
        </div>
        <div className={styles.menuContainer}>
          <select
            className={styles.menuSelect}
            value={selectedMenuName}
            onChange={(e) => setSelectedMenuName(e.target.value)}
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
        <div className={styles.searchResultTitle} style={{ backgroundColor: partDataList.find((p) => p.part_id === selectedPartId)?.part_color || '#ccc', color: '#FFFFFF' }}>
          {searchPartName} {searchNumberStr}
        </div>

        {filterRecordList.length > 0 ? (
          filterRecordList.map((record) => (
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