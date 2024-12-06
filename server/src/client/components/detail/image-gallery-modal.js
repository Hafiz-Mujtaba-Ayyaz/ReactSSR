import ReactModal from "react-modal"
import Close from "../common/close-btn"
import styles from "../common/react-modal.module.scss"

const GalleryModal = ({ className = "", showModal, onClickClose, children }) => {
  return (
    <>
      <ReactModal
        isOpen={showModal}
        onRequestClose={onClickClose}
        className={`${styles.ReactModal__Content} ${className}`.trim()}
        overlayClassName={styles.ReactModal__Overlay}
      >
        <Close className={styles.galleryClose} onClick={onClickClose} />
        {children}
      </ReactModal>
    </>
  )
}

export default GalleryModal
