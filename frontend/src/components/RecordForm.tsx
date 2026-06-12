import { useAtom } from 'jotai'
import { useTraining } from '../features/hooks/useTraining'
import {
  selectedMenuNameAtom,
  selectedPartIdAtom,
  recordFormNoteAtom,
  recordFormSetCountAtom,
  recordFormWeightSetsAtom,
  resetRecordFormAtom,
} from '../features/atoms/trainingAtom'
import { getLocalDateString } from '../utils/date'
import { WeightSets } from './WeightSets'

import style from './style/RecordForm.module.css'

type WeightSetValue = {
  weight: string
  reps: string
}

export const RecordForm = () => {
  // 部位リスト、メニューリスト
  const { partDataList, menuDataList, submitRecord, isPending } = useTraining()
  // 選択中の部位IDを管理
  const [selectedPartId, setSelectedPartId] = useAtom(selectedPartIdAtom)
  // 選択中のメニュー名を管理
  const [selectedMenuName, setSelectedMenuName] = useAtom(selectedMenuNameAtom)
  // 選択された部位に基づいてメニューリストをフィルタリング
  const filteredMenuList = menuDataList?.filter((menu) => menu.part_id === selectedPartId) ?? []

  // セット数を管理
  const [setCount, setSetCount] = useAtom(recordFormSetCountAtom)
  // 重量とレップ数の詳細を管理
  const [weightSets, setWeightSets] = useAtom(recordFormWeightSetsAtom)

  // 備考を管理
  const [note, setNote] = useAtom(recordFormNoteAtom)
  const [, resetRecordForm] = useAtom(resetRecordFormAtom)

  // セット数の追加ハンドラー
  const handleAddSet = () => {
    const nextCount = setCount + 1
    setSetCount(nextCount)
    setWeightSets((prev) => [...prev, { weight: '', reps: '' }])
  }

  // セット数の削除ハンドラー
  const handleRemoveSet = () => {
    const nextCount = Math.max(1, setCount - 1)
    setSetCount(nextCount)
    setWeightSets((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  // 重量とレップ数の変更ハンドラー
  const handleSetChange = (index: number, value: WeightSetValue) => {
    setWeightSets((prev) => prev.map((item, i) => (i === index ? value : item)))
  }

  // 次のセットにコピーするハンドラー
  const handleCopy = () => {
    const nextEmptyIndex = weightSets.findIndex((set) => set.weight === '' && set.reps === '')
    if (nextEmptyIndex <= 0) {
      return
    }

    const sourceSet = weightSets[nextEmptyIndex - 1]
    if (!sourceSet.weight || !sourceSet.reps) {
      return
    }

    setWeightSets((prev) =>
      prev.map((item, index) =>
        index === nextEmptyIndex ? { ...sourceSet } : item
      )
    )
  }

  // トレーニング記録の送信ハンドラー
  const handleSend = () => {
    // メニューが選択されていない場合は送信を中止
    if (!selectedMenuName) {
      alert('メニューを選択してください。')
      return
    }

    // 重量とレップ数の入力が不完全な場合は送信を中止
    for (const set of weightSets) {
      if (!set.weight || !set.reps) {
        alert('すべてのセットの重量と回数を入力してください。')
        return
      }
    }

    // トレーニング記録のオブジェクトを作成
    const record = {
      partId: selectedPartId,
      menuName: selectedMenuName,
      setCount: weightSets.length,
      weight: Array.from({ length: weightSets.length }, (_, i) => Number(weightSets[i].weight) || 0),
      reps: Array.from({ length: weightSets.length }, (_, i) => Number(weightSets[i].reps) || 0),
      createDate: getLocalDateString(),
      note,
    }

    submitRecord(record, {
      onSuccess: () => {
        resetRecordForm()
      },
      onError: () => {
        alert('記録の送信に失敗しました。再度お試しください。')
        return
      }
    })
  }

  return (
    <div className={style.recordForm}>
      <div className={style.partContainer}>
        {partDataList?.map((part) => (
          <label key={part.part_id} className={style.partRadio}>
            <input
              type="radio"
              name="part"
              value={part.part_id}
              checked={selectedPartId === part.part_id}
              onChange={() => {
                setSelectedPartId(part.part_id)
                setSelectedMenuName('')
              }}
            />
            {part.part_name}
          </label>
        ))}
      </div>

      <div className={style.menuContainer}>
        <select
            className={style.menuSelect}
            value={selectedMenuName}
            onChange={(event) => setSelectedMenuName(event.target.value)}
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

      {weightSets.map((value, index) => (
        <WeightSets
          key={index}
          value={value}
          onChange={(next) => handleSetChange(index, next)}
        />
      ))}
      <div className={style.buttonsContainer}>
        <button onClick={handleRemoveSet} className={style.removeSetButton}></button>
        <button onClick={handleCopy} className={style.copyButton} />
        <button onClick={handleAddSet} className={style.addSetButton}></button>
      </div>

      <div className={style.noteContainer}>
        <textarea
          className={style.noteTextarea}
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </div>

      <div>
        <button className={style.sendButton} onClick={handleSend} disabled={isPending}>
          {isPending ? '送信中...' : '送信'}
        </button>
      </div>
    </div>
  )
}

export default RecordForm