import { useEffect, useRef, useState } from "react"
import styles from "./add-keyword-filter.module.scss"
import Button from "../common/button"
import Close from "../common/close-btn"
import DropdownMenu from "../common/dropdown-menu"
import btnStyles from "./filter-drop-down-button.module.scss"
import { tabContainer } from "./filters.module.scss"
import TextInput from "../common/input"

const KeywordData = ({ ...props }) => {
  const { keywords, value, onClickAddBubble, inputValueOnChange, removeBubble, isMobile } = props

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && value) {
      onClickAddBubble(e)
    }
  }
  let extraProp = {}
  if (!isMobile) {
    extraProp.onKeyDown = onKeyDown
  }
  return (
    <div className={styles.addKeyword}>
      <div className={`${styles.keywordInnerWrap} flex u-mb8`}>
        <TextInput
          {...extraProp}
          className={styles.input}
          type="text"
          name="item"
          value={value}
          onChange={inputValueOnChange}
          placeholder="Enter Keywords"
        />
        <Button variant="secondaryGhostBtn" size="sm" onClick={onClickAddBubble} disabled={!value}>
          Add
        </Button>
      </div>

      <div className={`${styles.keywordBubble} u-mb16`}>
        {keywords.map((item) => (
          <div key={item} className={`${styles.bubble} inlineFlex`}>
            {item}
            <Close onClick={(e) => removeBubble(e, item)} />
          </div>
        ))}
      </div>
    </div>
  )
}

const AddKeywordFilter = (props) => {
  const { isMobile, keywords, updateKeywords, search } = props

  const [value, setValue] = useState("")
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if (clear) {
      search()
      setClear(false)
    }
  }, [clear])

  const dropdownRef = useRef()

  const inputValueOnChange = (e) => {
    setValue(e.target.value)
  }

  const onClickAddBubble = () => {
    setValue("")
    const inputKeywordValue = value.toLowerCase()
    if (keywords.indexOf(inputKeywordValue) == -1) {
      let copy = [...keywords]
      copy.push(inputKeywordValue)
      updateKeywords(copy)
    }
  }

  const removeBubble = (e, item) => {
    e.stopPropagation()
    let copy = [...keywords]
    copy.splice(copy.indexOf(item), 1)
    updateKeywords(copy)
  }

  const getFieldLabel = () => {
    if (keywords && keywords.length > 0) {
      let label = keywords[0]
      let rem = keywords.length - 1
      if (rem > 0) {
        return label + " +" + rem
      }
      return label
    }
    return "Add a Keyword"
  }

  return isMobile ? (
    <KeywordData
      isMobile={isMobile}
      keywords={keywords}
      value={value}
      onClickAddBubble={onClickAddBubble}
      removeBubble={removeBubble}
      inputValueOnChange={inputValueOnChange}
    />
  ) : (
    <DropdownMenu ref={dropdownRef} buttonText={getFieldLabel()}>
      <div className={tabContainer}>
        <KeywordData
          isMobile={isMobile}
          keywords={keywords}
          value={value}
          onClickAddBubble={onClickAddBubble}
          removeBubble={removeBubble}
          inputValueOnChange={inputValueOnChange}
        />
        <div className={`${btnStyles.btnList} flex u-spbwx16`}>
          <span
            onClick={() => {
              updateKeywords([])
              setClear(true)
              dropdownRef.current.setIsActive(false)
            }}
            className={btnStyles.close}
          >
            Clear
          </span>
          <Button
            onClick={() => {
              search()
              dropdownRef.current.setIsActive(false)
            }}
            variant="primaryBtn"
            size="sm"
          >
            Search
          </Button>
        </div>
      </div>
    </DropdownMenu>
  )
}

export default AddKeywordFilter
