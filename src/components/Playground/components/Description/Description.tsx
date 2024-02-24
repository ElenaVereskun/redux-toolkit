import { TypographyHeader } from "../../../UI"
import { TypographyText } from "../../../UI"

const Description: React.FC = () => {
    return (
        <div>
            <TypographyHeader>Игра Стрелочники</TypographyHeader>
            <TypographyText>Необходимо вводить с клавиатуры выпавшие в рандомном порядке стрелки. </TypographyText>
            <TypographyText>Если Вы праивильно вводите 3 раза подряд, Вы выигрываете.Если ошиблись 3 раза - проигрываете . Удачи!</TypographyText>
        </div>
    )
}

export default Description
