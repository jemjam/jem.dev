import { FunctionComponent } from 'react'

const ConsoleLog: FunctionComponent = ({ children }) => {
    console.log(children)
    return null
}
export default ConsoleLog
