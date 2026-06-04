import { atom } from 'jotai'
import type { RecordData } from '../../types/types'

export const trainingAtom = atom({
  selectedPartId: 1,
  selectedMenuName: '',
  partData: [],
  menuData: [],
  recordData: [],
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

export const searchPartNameAtom = atom('')
export const filterRecordListAtom = atom<RecordData[]>([])
export const searchNumberStrAtom = atom('')

export default trainingAtom