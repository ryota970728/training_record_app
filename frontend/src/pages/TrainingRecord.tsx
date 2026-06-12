import { useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import { useTraining } from '../features/hooks/useTraining'
import { selectedPartIdAtom, selectedMenuNameAtom } from '../features/atoms/trainingAtom'
import { getLocalDateString } from '../utils/date'
import { WeightSets } from '../components/WeightSets'

type WeightSetValue = {
  weight: string
  reps: string
}

export const TrainingRecord = () => {
  // 選択中の部位IDを管理
  const [selectedPartId] = useAtom(selectedPartIdAtom)
  // 選択中のメニュー名を管理
  const [selectedMenuName] = useAtom(selectedMenuNameAtom)
  // セット数を管理
  const [setCount, setSetCount] = useState(3)
  // 部位リストを管理
  const { partDataList } = useTraining()
  // 重量とレップ数の詳細を管理
  const [weightSets, setWeightSets] = useState<WeightSetValue[]>(
    Array.from({ length: setCount }, () => ({ weight: '', reps: '' }))
  )

  // 選択中の部位データを取得
  const selectedPartData = useMemo(
    () => partDataList?.find((part) => part.part_id === selectedPartId),
    [partDataList, selectedPartId]
  )

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

  // トレーニング記録の登録ハンドラー
  const handleRegister = () => {
    if (!selectedPartData || !selectedMenuName) return

    // トレーニング記録のオブジェクトを作成
    const record = {
      partId: selectedPartData.part_id,
      menuName: selectedMenuName,
      setCount: weightSets.length,
      setDetail: weightSets.map((item, i) => ({
        reps: Number(item.reps) || 0,
        weight: Number(item.weight) || 0,
        current_set: i + 1
      })),
      create_date: getLocalDateString(),
      note: '',
    }
    console.log('登録するトレーニング記録:', record)
  }

  return (
    <div className="training-record">
      <h1>{selectedMenuName}</h1>
      {weightSets.map((value, index) => (
        <WeightSets
          key={index}
          value={value}
          onChange={(next) => handleSetChange(index, next)}
        />
      ))}
      <div>
        <button type="button" onClick={handleRemoveSet}>➖</button>
        <button type="button" onClick={handleAddSet}>➕</button>
      </div>
      <div>
        <button type="button" onClick={handleRegister}>登録</button>
      </div>
    </div>
  )
}