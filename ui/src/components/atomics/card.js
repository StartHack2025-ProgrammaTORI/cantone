import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fontSize } from '../../styles/styles';
export default function CardComponent({ title, content, handleClick}) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: fontSize.large }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: fontSize.medium }}>
                        {content}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={handleClick}>Learn More</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    )
}