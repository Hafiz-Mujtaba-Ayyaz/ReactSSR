import ReactModal from "react-modal"
import Close from "./close-btn"
import styles from "./react-modal.module.scss"

const Modal = ({ className="", showModal, onClickClose, children }) => {
  return (
    <>
      <ReactModal
        isOpen={showModal}
        onRequestClose={onClickClose}
        className={styles.ReactModal__Content}
        overlayClassName={styles.ReactModal__Overlay}
      >
        <div className={`${className} ${styles.popup}`}>
          {children}
          <Close className={styles.close} onClick={onClickClose} />
        </div>
      </ReactModal>
    </>
  )
}

export default Modal