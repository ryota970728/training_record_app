import type { PartItem } from '../types/types'
import styles from './style/PartRadioButton.module.css'

type Props = {
  name: string
  part: PartItem
  selectedPartId: number
  onChange: (partId: number) => void
}

export const PartRadioButton = ({ name, part, selectedPartId, onChange }: Props) => {
  return (
    <label className={styles.partRadio}>
      <input
        type="radio"
        name={name}
        value={part.part_id}
        checked={selectedPartId === part.part_id}
        onChange={() => onChange(part.part_id)}
      />
      {part.part_name}
    </label>
  )
}
