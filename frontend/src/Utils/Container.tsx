import React, { ReactNode } from 'react'
import classes from './Container.module.css'


interface ContainerProps {
    children:ReactNode,
    className:string
}
const Container:React.FC<ContainerProps> = ({children,className}) => {
  return (
    <div className={`${className} ${classes.card}`}>{children}</div>
  )
}

export default Container