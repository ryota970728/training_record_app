import { useState } from 'react'
// import { useAtom } from 'jotai'
import { useTraining } from '../features/hooks/useTraining'
// import { selectedMenuNameAtom, selectedPartIdAtom } from '../features/atoms/trainingAtom'
import { WeightSets } from './WeightSets'

import style from './style/RecordForm.module.css'

export const RecordForm = () => {
  // 部位リスト、メニューリスト
  const { partDataList, menuDataList, submitRecord, isPending } = useTraining()
  // 選択中の部位IDを管理
  // const [selectedPartId, setSelectedPartId] = useAtom(selectedPartIdAtom)
  const [selectedPartId, setSelectedPartId] = useState(1)
  // 選択中のメニュー名を管理
  // const [selectedMenuName, setSelectedMenuName] = useAtom(selectedMenuNameAtom)
  const [selectedMenuName, setSelectedMenuName] = useState('')
  // 選択された部位に基づいてメニューリストをフィルタリング
  const filteredMenuList = menuDataList?.filter((menu) => menu.part_id === selectedPartId) ?? []

  // セット数を管理
  const [setCount, setSetCount] = useState(3)
  // 重量とレップ数の詳細を管理
  const [weightSets, setWeightSets] = useState<WeightSetValue[]>(
    Array.from({ length: setCount }, () => ({ weight: '', reps: '' }))
  )

  type WeightSetValue = {
    weight: string
    reps: string
  }

  // 備考を管理
  const [note, setNote] = useState('')

  // セット数の追加ハンドラー
  const handleAddSet = () => {
    setSetCount(setCount + 1)
    setWeightSets((prev) => [...prev, { weight: '', reps: '' }])
  }

  // セット数の削除ハンドラー
  const handleRemoveSet = () => {
    setSetCount(Math.max(1, setCount - 1))
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
      createDate: new Date().toISOString().slice(0, 10),
      note: '',
    }

    submitRecord(record, {
      onSuccess: () => {
        // alert('記録が正常に送信されました！')
      },
      onError: () => {
        alert('記録の送信に失敗しました。再度お試しください。')
        return
      }
    })

    // フォームの初期化
    setSelectedPartId(1)
    setSelectedMenuName('')
    setSetCount(3)
    setNote('')
    setWeightSets(Array.from({ length: 3 }, () => ({ weight: '', reps: '' })))
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
              onChange={() => setSelectedPartId(part.part_id)}
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