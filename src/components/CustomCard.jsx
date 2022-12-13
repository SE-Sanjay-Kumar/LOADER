import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from './TextRating';

export default function CustomCard({person,date,rating,feedback, order_id}) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined"
                style={
                    {
                        borderRadius: "20px"
                    }
                }
            >
            <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                @ {person} # {order_id}
            </Typography>
           
            <Typography>
                on: {date}
            </Typography>
            <br/>
            <Rating rating={rating}/>
        
            <Typography variant="body1">
                {feedback}
            </Typography>
        </CardContent>
        
    </React.Fragment>
            </Card>
        </Box>
    );
}