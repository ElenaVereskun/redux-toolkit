import styles from "./TypographyText.module.css"
import cn from 'classnames'
import type {
    TypographyProps as MaterialTypographyProps
} from "@mui/material";
import {
    Typography as MaterialTypography
} from "@mui/material"

export interface ITypographyTextProps extends MaterialTypographyProps { }

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
    const { children, className = '' } = props

    return <MaterialTypography
        {...props}
        className={cn(styles.text, className)}>
        {children}
    </MaterialTypography>
}

export default TypographyText
