type RecordModalProps = {
  onCancel: () => void
  onOk: () => void
}

const RecordModal = ({ onCancel, onOk }: RecordModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>送信確認</h2>
        <p>送信しますか？</p>
        <div className="modal-actions">
          <button type="button" className="modal-button cancel" onClick={onCancel}>
            キャンセル
          </button>
          <button type="button" className="modal-button confirm" onClick={onOk}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecordModal
