import Tabs, { TabPane } from "rc-tabs"
import { useRef } from "react"
// TODO add these styles
// import "react-simple-tabs-component/dist/index.css"
import { commercialTabs, homesTab, plotsTab, typesHash } from "../../utils/constants"
import DropdownMenu from "../common/dropdown-menu"
import { tabContainer } from "./home-filters.module.scss"
import styles from "./property-type-tab.module.scss"

const TabData = (props) => {
  const { selectedType, selectType, tabsMapping, dropDownRef, className = "" } = props
  const allTypes = [homesTab, plotsTab, commercialTabs]
  return (
    <Tabs
      className={`${className} c-tabs`}
      onTabClick={(key) => {
        selectType(tabsMapping[key])
      }}
      defaultActiveKey={(typesHash[selectedType?.slug?.toLowerCase()]?.parentId).toString() || "1"}
    >
      {allTypes.map((parentType, i) => {
        return (
          <TabPane tab={tabsMapping[i + 1].name} key={(i + 1).toString()}>
            <div className={`${styles.tabContents} flexBetween flex`}>
              {parentType.map((item) => {
                return (
                  <div
                    key={item.slug}
                    onClick={() => {
                      dropDownRef?.current?.setIsActive(false)
                      selectType(item)
                    }}
                    className={`${styles.tabItem} ${
                      item.slug == selectedType.slug ? styles.selected : ""
                    } flexYcenter inlineFlex`}
                  >
                    {item.icon()}
                    {item.name}
                  </div>
                )
              })}
            </div>
          </TabPane>
        )
      })}
    </Tabs>
  )
}

export default function PropertyTypeTab({ selectedType, selectType, isMobile, className = "" }) {
  const tabsMapping = {
    1: {
      name: "Homes",
      h1Name: "Properties",
      slug: "Homes",
      id: 1,
      parentId: 1,
      external_slug: "Homes",
    },
    2: {
      name: "Plots",
      h1Name: "All Plots & Land",
      slug: "Plots",
      id: 2,
      parentId: 2,
      external_slug: "Plots",
    },
    3: {
      name: "Commercial",
      h1Name: "Commercial Properties",
      id: 3,
      slug: "Commercial-Offices",
      parentId: 3,
      external_slug: "Commercial",
    },
  }
  const dRef = useRef()

  return isMobile ? (
    <TabData selectType={selectType} tabsMapping={tabsMapping} selectedType={selectedType} className={className} />
  ) : (
    <DropdownMenu
      ref={dRef}
      classNameInner={styles.tabContainer}
      buttonText={`${
        selectedType.parentId && selectedType.id && selectedType.parentId == selectedType.id ? "All " : ""
      }${selectedType.name}`}
    >
      <div className={tabContainer}>
        <TabData
          selectType={(selected) => {
            selectType(selected)
          }}
          tabsMapping={tabsMapping}
          dropDownRef={dRef}
          selectedType={selectedType}
          className={`${className} ${styles.propertyTypeTabList}`}
        />
      </div>
    </DropdownMenu>
  )
}
