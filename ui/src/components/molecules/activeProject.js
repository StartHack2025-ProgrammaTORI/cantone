import React from "react"
import { Typography } from '@mui/material'; 
import { fontSize, margin } from '../../styles/styles';
import { Checkbox } from '@mui/material'; // Added import for Typography

function ActiveProject({title, step, checked, handleClick, style}) {
    return (
        <div style={{
            justifyContent: 'left', 
            alignItems: 'left',
            textAlign: 'left',
            ...style
        }}>
            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: fontSize.extraLarge, fontWeight: 'bold' }}>
                {title}
            </Typography>
            <Typography sx={{ fontSize: fontSize.medium, marginLeft: margin.extraSmall }}>
                <Checkbox checked={checked} onClick={handleClick}></Checkbox>
                {step}
            </Typography>
        </div>
    )
}

export default ActiveProject