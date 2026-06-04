/**
 * 部位マスタアイテム
 */
export type PartItem = {
  part_id: number
  part_name: string
  part_color: string
}

/**
 * メニューマスタアイテム
 */
export type MenuItem = {
  menu_id: number
  part_id: number
  menu_name: string
}

/**
 * 部位マスタ
 */
export type PartMaster = {
  part_name: string
  part_color: string
}

/**
 * メニューマスタ
 */
export type MenuMaster = {
  menu_name: string
}

/**
 * セット詳細
 */
export type SetDetail = {
  reps: number
  weight: number
  current_set: number
}

/**
 * トレーニング記録データ
 */
export type RecordData = {
  record_id: number
  set_count: number
  note: string
  create_date: string
  part_master: PartMaster
  menu_master: MenuMaster
  set_detail: SetDetail[]
}

/**
 * 新規登録用トレーニング記録データ
 */
export type CurrentRecordData = {
  partId: number
  menuName: string
  setCount: number
  weight: number[]
  reps: number[]
  createDate: string
  note: string
}
