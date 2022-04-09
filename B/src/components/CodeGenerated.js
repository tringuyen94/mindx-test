import { Fragment } from "react"
import { useSelector } from "react-redux"


const CodeGenerated = ({ typeShorten }) => {
   const { result } = useSelector(state => state.link.result)
   console.log(result)
   if (result && typeShorten.id === 0) return (
      <Fragment>
         <div className="code-generated">
            <h2>Link generated</h2>
            <h1> {result.short_link} </h1>
         </div>
      </Fragment>
   )
   else if (result && typeShorten.id === 1) return (
      <Fragment>
         <div className="code-generated">
            <h2>Link generated</h2>
            <h1> {result.short_link2} </h1>
         </div>
      </Fragment>
   )
   else return (
      <Fragment>
         <div className="code-generated">
            <h2>Link generated</h2>
            <h1> {result.short_link3} </h1>
         </div>
      </Fragment>
   )
}
export default CodeGenerated