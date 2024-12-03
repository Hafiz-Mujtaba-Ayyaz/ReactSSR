import ContentLoader from "react-content-loader"

const Skeleton = ({ count = "5", animate = false, shape = "rect", style = {}, size = 96, ...props }) => {
  let renderLoading = []
  const renderLen = count
  const width = props.width || size
  const height = props.height || size

  for (let i = 0; i < renderLen; i++) {
    renderLoading.push(
      <ContentLoader
        animate={animate}
        backgroundColor="#e5e7eb"
        foregroundColor="#e5e7eb"
        style={{ width: width, height: height, ...style }}
        key={i}
        {...props}
      >
        {shape === "rect" ? (
          <rect rx="4" width={width} height={height} />
        ) : (
          <circle cx={width / 2} cy={(props.height ? props.height : width) / 2} r={width / 2} />
        )}
      </ContentLoader>
    )
  }

  return <>{renderLoading}</>
}

export default Skeleton
