import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import FileUpload from "../../components/FileUpload"

const AddDriver = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="ADD DRIVER" subtitle="Register driver here!" />

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
                                type="text"
                                label="Enter User name"
                                onChange={handleChange}
                                value={values.driver_name}
                                name="driver_name"
                                error={!!touched.driver_name && !!errors.driver_name}
                                helperText={touched.driver_name && errors.driver_name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Enter password"
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Years of Experience ?"
                                onChange={handleChange}
                                value={values.experience}
                                name="experience"
                                error={!!touched.experience && !!errors.experience}
                                helperText={touched.experience && errors.experience}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Contact Number"
                                onChange={handleChange}
                                value={values.phone_number}
                                name="phone_number"
                                error={!!touched.phone_number && !!errors.phone_number}
                                helperText={touched.phone_number && errors.phone_number}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Salary ?"
                                onChange={handleChange}
                                value={values.salary}
                                name="salary"
                                error={!!touched.salary && !!errors.salary}
                                helperText={touched.salary && errors.salary}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Food Cost"
                                onChange={handleChange}
                                value={values.food_cost}
                                name="food_cost"
                                error={!!touched.food_cost && !!errors.food_cost}
                                helperText={touched.food_cost && errors.food_cost}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Assigned Vehicle' Number"
                                onChange={handleChange}
                                value={values.vehicle_number}
                                name="vehicle_number"
                                error={!!touched.vehicle_number && !!errors.vehicle_number}
                                helperText={touched.vehicle_number && errors.vehicle_number}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <label>Upload License document </label>
                            <FileUpload />
                            
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Register Driver
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    driver_name: yup.string().required("required"),
    password: yup.string().required("required"),
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    experience: yup.string().required("required"),
    food_cost: yup.string().required("required"),
    vehicle_number: yup.string().required("required"),
    salary: yup.string().required("required"),
});
const initialValues = {
    driver_name: "",
    password: "",
    experience: "",
    food_cost: "",
    vehicle_number: "",
    salary: "",
};

export default AddDriver;