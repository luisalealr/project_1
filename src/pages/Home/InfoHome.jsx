import { BotonesInfo } from "./BotonesInfo"
import { Imageinfo } from "./Imageinfo"
import { TextoInfo } from "./TextoInfo"
import { TitleInfo } from "./TitleInfo"
import style from "./InfoHome.module.css"

export const InfoHome = () => {
  return (
    <div className={style.container}>
        <Imageinfo /> 
        <TitleInfo />
        <TextoInfo /> 
        <BotonesInfo />
    </div>
  )
}
