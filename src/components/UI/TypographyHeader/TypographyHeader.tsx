import styles from "./TypographyHeader.module.css"
import cn from 'classnames'
import type {
    TypographyProps as MaterialTypographyProps
} from "@mui/material";
import {
    Typography as MaterialTypography
} from "@mui/material"

export interface ITypographyHeaderProps extends MaterialTypographyProps { }

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
    const { children, className = '' } = props

    return <MaterialTypography
        variant="h3"
        {...props}
        className={cn(styles.text, className)}>
        {children}
    </MaterialTypography>
}

export default TypographyHeader
