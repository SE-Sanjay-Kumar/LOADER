import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import * as React from 'react';

const BidOrderDetail = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const location = useLocation();
    const dataObject = location.state.data;
    console.log(dataObject);
    const [data, setData] = useState(dataObject);
    const handleFormSubmit = (values) => {
        console.log(values);
    };
   
    useEffect(() => {
        setData(current => {
            const { order_status, ...rest } = current;
            return rest;
        })
        
    }, []);

    initialValues = data;
    return (
        <Box m="20px">
            <Header title="Bidding Order" subtitle="Detail of order which is in state of bidding!" />

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
};

export default BidOrderDetail;