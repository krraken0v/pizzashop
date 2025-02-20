import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={410}
    height={470}
    viewBox="0 0 410 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="23" y="307" rx="3" ry="3" width="372" height="54" /> 
    <rect x="212" y="371" rx="3" ry="3" width="147" height="38" /> 
    <circle cx="203" cy="140" r="120" /> 
    <rect x="59" y="279" rx="0" ry="0" width="297" height="16" /> 
    <rect x="55" y="371" rx="0" ry="0" width="134" height="38" />
  </ContentLoader>
)

export default Skeleton