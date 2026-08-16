import type { PartItem } from '../types/types'
import styles from './style/PartRadioButton.module.css'

type Props = {
  name: string
  part: PartItem
  selectedPartId: number
  onChange: (partId: number) => void
}

export const PartRadioButton = ({ name, part, selectedPartId, onChange }: Props) => {
  const isSelected = selectedPartId === part.part_id

  return (
    <label
      className={styles.partRadio}
      style={
        isSelected
          ? {
              backgroundColor: part.part_color,
              borderColor: part.part_color
            }
          : undefined
      }
    >
      <input
        type="radio"
        name={name}
        value={part.part_id}
        checked={isSelected}
        onChange={() => onChange(part.part_id)}
      />
      {part.part_name}
    </label>
  )
}
