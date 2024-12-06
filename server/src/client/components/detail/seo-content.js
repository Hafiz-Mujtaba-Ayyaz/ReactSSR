import styles from "./seo-content.module.scss"

export const SEOContent = ({ content }) => {
  return (
    <>{content && <div className={`${styles.seoContent} u-mb32`} dangerouslySetInnerHTML={{ __html: content }} />}</>
  )
}
