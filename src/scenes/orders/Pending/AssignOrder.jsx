import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AssignOrder = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const location = useLocation();
    const dataObject = location.state.data;
    console.log(dataObject);
    const [data, setData] = useState(dataObject);
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    /* 
        There will be business logic in backend
        for checking availability of the driver 
        based on parameters!
    */
    const [avaiable, setAvailable] = React.useState([]);
    useEffect(() => {
        setData(current => {
            const { order_status, ...rest } = current;
            return rest;
        })
        setAvailable([{
            driver_id: 3,
            driver_name: 'jack'
        },
        {
            driver_id: 5,
            driver_name: 'mack'
        },
        {
            driver_id: 4,
            driver_name: 'john'
        }]);
    }, []);

    initialValues = data;

    
    const [selected, setSelected] = React.useState(null);
    const handleSelect = (event) => {
        setSelected(event.target.value);
    };
    return (
        <Box m="20px">
            <Header title="Assign Order" subtitle="Make order assignment here!" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Order Id"
                                onChange={handleChange}
                                value={values.order_id}
                                name="order_id"
                                sx={{ gridColumn: "span 2" }}

                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Type of Vehicle Required"
                                onChange={handleChange}
                                value={values.type_of_vehicle}
                                name="type_of_vehicle"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Price"
                                onChange={handleChange}
                                value={values.price}
                                name="price"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Schedule"
                                onChange={handleChange}
                                value={values.schedule}
                                name="schedule"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="No. Of Labour"
                                value={values.no_of_labour}
                                name="no_of_labour"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Payment Method"
                                onChange={handleChange}
                                value={values.payment_method}
                                name="payment_method"
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Is Fragile "
                                onChange={handleChange}
                                value={values.is_fragile}
                                name="is_fragile"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Pick Up Location  "
                                onChange={handleChange}
                                value={values.pickup_location}
                                name="pickup_location"
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Drop Off Location"
                                onChange={handleChange}
                                value={values.dropoff_location}
                                name="dropoff_location"
                                sx={{ gridColumn: "span 4" }}
                            />


                            <FormControl varinat="filled" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Driver</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selected}
                                    label="Age"
                                    onChange={handleSelect}
                                >
                                    {
                                        avaiable.map((driver)=>{
                                            return <MenuItem value={driver.driver_id}>{driver.driver_name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Assign
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
});
let initialValues = {
    order_id: "",
    type_of_vehicle: "",
    price: "",
    schedule: "",
    payment_method: "",
    is_fragile: "",
    pickup_location: "",
    dropoff_location: "",
    no_of_labour: "",
    driver_id: "",
};

export default AssignOrder;