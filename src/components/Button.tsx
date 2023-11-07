
import {FC} from "react"

interface Props{
  texto: string;
  onClick: () => void
}

type PropsType = {
  exto: string;
  onClick: () => void
}

// export const button:FC<Props> = ({texto, onClick}) => {
//   return (
//     <button onClick={onClick}>{texto}</button>
//     )
// }

export const button = ({texto, onClick}:{texto:string, onClick:() => void}) => {
  return (
    <button onClick={onClick}>{texto}</button>
    )
}