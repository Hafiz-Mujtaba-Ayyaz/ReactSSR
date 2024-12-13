import React from "react";
import debounce from "lodash/debounce"
import { useEffect, useRef, useState } from "react"
import { MdPlace } from "react-icons/md"
import Algolia from "../../services/Algolia"
import Chip from "../common/chip"
import DropdownMenu from "../common/dropdown-menu"
import { locationChip } from "./home-filters.module.scss"
import * as styles from "./autocomplete.module.scss"

const LocationSelection = (props) => {
  const { city, selected, updateChildLocs, className = "", innerClassName = "", isMobile } = props

  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState({})
  const { externalID } = city
  const [value, setValue] = useState("")
  const dropDownRef = useRef()
  const parentRef = useRef()
  const inputFieldRef = useRef()
  const [isFocused, setIsFocused] = useState(false)

  const getLocations = async () => {
    try {
      let algoliaQueryObj = Algolia.getSubLocationsQuery(
        externalID,
        selected.map((item) => item.externalID)
      )

      const res = await Algolia.getLocationsIndex().search(value, algoliaQueryObj)
      setData(res.hits)
      if (res?.hits?.length > 0) {
        setTimeout(() => {
          dropDownRef.current.setIsActive(true)
        }, 75)
      }
    } catch (e) {
      setData([])
    }
  }

  const onChange = (e) => {
    setValue(e.target.value)
    const search = debounce(getLocations, 300)
    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel()
      }
      return search
    })
    search()
  }

  const onselectValue = (item) => {
    setValue("")
    let isNew =
      selected.filter((sl) => {
        return sl.externalID == item.externalID
      }).length == 0
    if (isNew) {
      let copy = [...selected]
      let parentHierarchy = item.hierarchy.slice(0, -1)
      let parentIds = parentHierarchy.map((it) => it.externalID)
      let filtered = copy.filter((c) => {
        return parentIds.indexOf(c.externalID) == -1
      })

      if (filtered.length == copy.length) {
        filtered = copy.filter((c) => {
          let parentItems = c.hierarchy.slice(0, -1)
          let list = parentItems.map((it1) => it1.externalID)
          return list.indexOf(item.externalID) == -1
        })
      }
      filtered.push(item)
      updateChildLocs(filtered)
    }
    dropDownRef.current.setIsActive(false)
    setIsFocused(false)
  }

  useEffect(() => {
    if (isFocused) {
      inputFieldRef?.current?.focus()
    }
  }, [isFocused])

  const onKeyDown = (e) => {
    if (e.keyCode === 8 && !value && selected.length > 0) {
      let copy = [...selected]
      copy = copy.slice(0, copy.length - 1)
      updateChildLocs(copy)
    }
  }
  return isMobile ? (
    <div
      ref={parentRef}
      className={className}
      onClick={() => {
        if (!isFocused) {
          setIsFocused(true)
          getLocations()
        }
      }}
    >
      <MdPlace />
      <div className={`${innerClassName} ${!isFocused && selected && selected.length > 0 && styles.slideViewGradiant}`}>
        {isFocused && selected && selected.length > 0 && (
          <div className={`u-mb8`}>
            {selected.map((loc) => {
              return (
                <Chip
                  key={loc.externalID}
                  className={locationChip}
                  item={loc}
                  onRemove={(item) => {
                    let filtered = selected.filter((it) => {
                      return it.externalID != item.externalID
                    })
                    updateChildLocs(filtered)
                  }}
                />
              )
            })}
          </div>
        )}
        {!isFocused && selected && selected.length > 0 && (
          <div className={`${styles.slideView} u-mb8`}>
            <div className={`${styles.chipsList} flex`}>
              {selected.map((loc) => {
                return (
                  <Chip
                    key={loc.externalID}
                    className={locationChip}
                    item={loc}
                    onRemove={(item) => {
                      let filtered = selected.filter((it) => {
                        return it.externalID != item.externalID
                      })
                      updateChildLocs(filtered)
                    }}
                  />
                )
              })}
            </div>
          </div>
        )}
        <input
          ref={inputFieldRef}
          placeholder="Enter Locations"
          onChange={onChange}
          value={value}
          onKeyDown={onKeyDown}
        />
        <DropdownMenu
          customRef={parentRef}
          className={styles.locationDropDown}
          ref={dropDownRef}
          callback={(isVisible) => {
            setIsFocused(isVisible)
          }}
        >
          <div>
            {data && (
              <ul>
                {data.map((it) => (
                  <li key={it.externalID} onClick={() => onselectValue(it)} className={styles.item}>
                    {it.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DropdownMenu>
      </div>
      {selected && selected.length > 0 ? (
        <button className={styles.moreItem}>{selected.length + " selected"}</button>
      ) : null}
    </div>
  ) : (
    <div
      ref={parentRef}
      className={className}
      onClick={() => {
        if (!isFocused) {
          setIsFocused(true)
          getLocations()
        }
      }}
    >
      <MdPlace />
      <div
        className={`${innerClassName} ${isFocused ? styles.fieldShadow : ""} ${
          !isFocused && selected.length > 0 && styles.slideViewGradiant
        }`}
      >
        {isFocused && selected.length > 0 && (
          <div>
            {selected.map((loc) => {
              return (
                <Chip
                  key={loc.externalID}
                  className={locationChip}
                  item={loc}
                  onRemove={(item) => {
                    let filtered = selected.filter((it) => {
                      return it.externalID != item.externalID
                    })
                    updateChildLocs(filtered)
                  }}
                />
              )
            })}
          </div>
        )}
        {!isFocused && selected.length > 0 && (
          <div className={styles.slideView}>
            <div className={`${styles.chipsList} flex`}>
              {selected.map((loc) => {
                return (
                  <Chip
                    key={loc.externalID}
                    className={locationChip}
                    item={loc}
                    onRemove={(item) => {
                      let filtered = selected.filter((it) => {
                        return it.externalID != item.externalID
                      })
                      updateChildLocs(filtered)
                    }}
                  />
                )
              })}
            </div>
          </div>
        )}
        {(isFocused || selected.length == 0) && (
          <input
            ref={inputFieldRef}
            placeholder="Enter Locations"
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
          />
        )}
        <DropdownMenu
          customRef={parentRef}
          className={styles.locationDropDown}
          ref={dropDownRef}
          callback={(isVisible) => {
            setIsFocused(isVisible)
          }}
        >
          <div>
            {data && (
              <ul>
                {data.map((it) => (
                  <li key={it.externalID} onClick={() => onselectValue(it)} className={styles.item}>
                    {it.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DropdownMenu>
      </div>
      {selected.length > 0 && <button className={styles.moreItem}>{selected.length + " selected"}</button>}
    </div>
  )
}

export default LocationSelection
