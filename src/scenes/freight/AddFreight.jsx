import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AddDriver = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="ADD Freight" subtitle="Record Freight here!" />

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
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Enter Vehicle Number"
                                onChange={handleChange}
                                value={values.vehicle_name}
                                name="vehicle_name"
                                error={!!touched.vehicle_name && !!errors.vehicle_name}
                                helperText={touched.vehicle_name && errors.vehicle_name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Enter mileage"
                                onChange={handleChange}
                                value={values.mileage}
                                name="mileage"
                                error={!!touched.mileage && !!errors.mileage}
                                helperText={touched.mileage && errors.mileage}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Maintenace Cost ?"
                                onChange={handleChange}
                                value={values.maintenance_cost}
                                name="maintenance_cost"
                                error={!!touched.maintenance_cost && !!errors.maintenance_cost}
                                helperText={touched.maintenance_cost && errors.maintenance_cost}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Availability Status"
                                onChange={handleChange}
                                value={values.availability_status}
                                name="availability_status"
                                error={!!touched.availability_status && !!errors.availability_status}
                                helperText={touched.availability_status && errors.availability_status}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Weight Carry ?"
                                onChange={handleChange}
                                value={values.weight_carry}
                                name="weight_carry"
                                error={!!touched.weight_carry && !!errors.weight_carry}
                                helperText={touched.weight_carry && errors.weight_carry}
                                sx={{ gridColumn: "span 4" }}
                            />
                            
                            
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Type of Vehicle ?"
                                onChange={handleChange}
                                value={values.type}
                                name="type"
                                error={!!touched.type && !!errors.type}
                                helperText={touched.type && errors.type}
                                sx={{ gridColumn: "span 4" }}
                            />


                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Add Vehicle
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    vehicle_name: yup.string().required("required"),
    mileage: yup.string().required("required"),
    availability_status: yup.string().required("required"),
    maintenance_cost: yup.string().required("required"),
    type: yup.string().required("required"),
    weight_carry: yup.string().required("required"),
});
const initialValues = {
    vehicle_name: "",
    mileage: "",
    availability_status: "",
    maintenance_cost: "",
    type: "",
    weight_carry: "",
};

export default AddDriver;