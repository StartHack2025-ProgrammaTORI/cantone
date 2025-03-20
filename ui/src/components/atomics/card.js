import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fontSize, borderRadius } from '../../styles/styles';

function CardComponent({ title, content, status, handleClick, textStyle, style }) {
    return (
        <Box sx={{ minWidth: 275, ...style }}>
            <Card variant="outlined" sx={{ borderRadius: borderRadius.small, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', border: '0.5px solid rgba(0, 0, 0, 0.1)', ...textStyle }}>
                <React.Fragment>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: fontSize.extraLarge, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: fontSize.medium }}>
                        {content}
                    </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button size="small" onClick={handleClick}>Continua</Button>
                        <Typography sx={{ fontSize: fontSize.small, color: 'text.secondary' }}>
                            {status}
                        </Typography>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default CardComponent