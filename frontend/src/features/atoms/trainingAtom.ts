import { atom } from 'jotai'
import type { RecordData } from '../../types/types'

export const trainingAtom = atom({
  // === 記録状態の管理 ===
  selectedPartId: 1,
  selectedMenuName: '',
  partData: [],
  menuData: [],
  recordData: [],
  // === 検索状態の管理 ===
  searchSelectedPartId: 1,
  searchSelectedMenuName: '',
  searchPartData: [],
  searchMenuData: [],
  searchRecordData: [],
})

/**
 * 選択された部位IDを管理する
 */
export const selectedPartIdAtom = atom(
  (get) => get(trainingAtom).selectedPartId,
  (get, set, newPartId: number) => {
    set(trainingAtom, {
      ...get(trainingAtom),
      selectedPartId: newPartId,
    })
  }
)

export const searchSelectedPartIdAtom = atom(
  (get) => get(trainingAtom).searchSelectedPartId,
  (get, set, newPartId: number) => {
    set(trainingAtom, {
      ...get(trainingAtom),
      searchSelectedPartId: newPartId,
    })
  }
)

/**
 * 選択されたメニュー名を管理する
 */
export const selectedMenuNameAtom = atom(
  (get) => get(trainingAtom).selectedMenuName ?? '',
  (get, set, newMenuName: string) => {
    set(trainingAtom, {
      ...get(trainingAtom),
      selectedMenuName: newMenuName,
    })
  }
)

export const searchSelectedMenuNameAtom = atom(
  (get) => get(trainingAtom).searchSelectedMenuName ?? '',
  (get, set, newMenuName: string) => {
    set(trainingAtom, {
      ...get(trainingAtom),
      searchSelectedMenuName: newMenuName,
    })
  }
)

type WeightSetValue = {
  weight: string
  reps: string
}

const defaultWeightSets: WeightSetValue[] = Array.from({ length: 3 }, () => ({ weight: '', reps: '' }))

export const searchPartNameAtom = atom('')
export const searchFilterRecordListAtom = atom<RecordData[]>([])
export const searchNumberStrAtom = atom('')

export const recordFormSetCountAtom = atom<number>(3)
export const recordFormWeightSetsAtom = atom<WeightSetValue[]>(defaultWeightSets)
export const recordFormNoteAtom = atom<string>('')

export const resetRecordFormAtom = atom(
  null,
  (_get, set) => {
    set(selectedPartIdAtom, 1)
    set(selectedMenuNameAtom, '')
    set(recordFormSetCountAtom, 3)
    set(recordFormWeightSetsAtom, defaultWeightSets)
    set(recordFormNoteAtom, '')
  }
)

export type { WeightSetValue }

export default trainingAtom