import styles from "./layout-grid.module.scss"

export default function LayoutGrid({ children, classname = "", gridColumns = "", rowGap = "", style = {} }) {
  return (
    <div
      className={`${classname} ${styles.layoutGrid}`.trim()}
      style={{ "--grid-columns": `${gridColumns}`, "--grid-row-gap": `${rowGap}`, ...style }}
    >
      {children}
    </div>
  )
}
