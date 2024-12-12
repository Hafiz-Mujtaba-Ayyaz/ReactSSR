import Slider, { Range } from "rc-slider"
import * as styles from "./range-slider.module.scss"
// TODO Add the styles
// import "rc-slider/assets/index.css"

const RangeSlider = (props) => {
  const {
    sliderDefaultValue = [],
    onChange,
    min,
    max,
    value,
    defaultValue,
    label,
    formattedValue = "",
    ...rest
  } = props

  return (
    <>
      {!!label && (
        <div className={`${styles.rangeSliderHeading} flex flexBetween`}>
          <div className={`${styles.fieldHdg} ${styles.bold} u-mb16`}>{label}</div>
          {!!formattedValue && (
            <div className={`${styles.headingValue} inlineFlex justifyFlexEnd`}>{formattedValue}</div>
          )}
        </div>
      )}

      <div className={`${styles.rangeSlider} flex`}>
        {props.control === "single" ? (
          <Slider
            min={parseFloat(min)}
            max={parseFloat(max)}
            value={value}
            defaultValue={sliderDefaultValue}
            onChange={onChange}
            {...rest}
          />
        ) : (
          <>
            <Range
              min={parseFloat(min)}
              max={parseFloat(max)}
              value={value}
              allowCross={false}
              defaultValue={defaultValue}
              onChange={onChange}
              {...rest}
            />
          </>
        )}
      </div>
    </>
  )
}

export default RangeSlider
