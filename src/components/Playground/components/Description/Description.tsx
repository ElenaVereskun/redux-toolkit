import styles from "./Description.module.css"

import { TypographyHeader } from "../../../UI"
import { TypographyText } from "../../../UI"

const Description: React.FC = () => {
    return (
        <div>
            <TypographyHeader>Arrow-game Description</TypographyHeader>
            <TypographyText>Правила игры описать чуть позднее </TypographyText>
        </div>
    )
}

export default Description
