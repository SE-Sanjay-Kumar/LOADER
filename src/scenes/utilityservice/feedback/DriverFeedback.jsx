import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import CustomCard from '../../../components/CustomCard'


const DriverFeedback = () => {
  return (
    <Box m="20px">
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <CustomCard
            person="Jack"
            date="12-3-2022"
            rating={5}
            order_id={90}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DriverFeedback