import React from 'react'
import Box from '@mui/material/Box'
import CustomCard from '../../../components/CustomCard'
import Grid from '@mui/material/Grid';

const ClientFeedback = () => {
  return (
    <Box m="20px">
      <Grid container spacing={2}>
        <Grid item   sm={12} md={6}>
          <CustomCard
            person="Raju"
            date="12-3-2022"
            rating={2.5}
            order_id={2}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>
        <Grid item  sm={12} md={6}>
          <CustomCard
            person="Raju"
            date="12-3-2022"
            rating={2.5}
            order_id={3}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomCard
            person="Raju"
            date="12-3-2022"
            rating={2.5}
            order_id={7}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomCard
            person="Raju"
            date="12-3-2022"
            rating={4.0}
            order_id={7}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomCard
            person="Raju"
            date="12-3-2022"
            rating={3.5}
            order_id={10}
            feedback="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto distinctio est porro saepe ex culpa cum dolorum doloremque, odio dolor mollitia laudantium animi, natus, veritatis facere quod vero labore!"
          />
        </Grid>

      </Grid >
    </Box>

  )
}

export default ClientFeedback