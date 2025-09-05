import {ReactNode} from "react";

interface DemoShape {
  children : ReactNode
}
const Demo = ({children} : DemoShape) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}
 
export default Demo