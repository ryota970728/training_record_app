import style from './style/WeightSets.module.css'

type WeightSetValue = {
  weight: string
  reps: string
}

type WeightSetsProps = {
  value: WeightSetValue
  onChange: (value: WeightSetValue) => void
}

export const WeightSets = ({ value, onChange }: WeightSetsProps) => {
  return (
    <div className={style.weightSetsContainer}>
      <label>
        <input
          type="number"
          value={value.weight}
          onChange={(e) => onChange({ ...value, weight: e.target.value })}
          className={style.weightInput}
        />
        kg
      </label>
      <label>
        <input
          type="number"
          value={value.reps}
          onChange={(e) => onChange({ ...value, reps: e.target.value })}
          className={style.repsInput}
        />
        回
      </label>
    </div>
  )
}