import Header from "../../../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ReactWhatsapp from "react-whatsapp";

const WMessage = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [number, setNumber] = useState();
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const [load, setLoad] = useState(false);
    const location = useLocation();
    const dataObject = location.state.data;
    console.log('hello', dataObject);
    useEffect(() => {
        setLoad(true);
        setNumber(dataObject.phone_number);
    }, [dataObject])

    initialValues.phone_number = number;
    return (
        <Box m="20px">
            <Header title="Whatsapp Message" subtitle="Send whatsapp message to clients!" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
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
                            style={{
                                marginTop: '15vh',
                            }}
                        >
                            <TextField
                                disabled={true}
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Phone Number"
                                onChange={handleChange}
                                value={values.phone_number}
                                name="phone_number"
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Message"
                                onChange={handleChange}
                                value={values.message}
                                name="message"
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="start" mt="50px">
                            {
                                (load)?  <ReactWhatsapp number={values.phone_number} message={values.message}>
                                <SendOutlinedIcon />
                            </ReactWhatsapp>: null
                            }
                           
                          
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}
const checkoutSchema = yup.object().shape({

});
let initialValues = {
    phone_number: "",
    message: "",
};


export default WMessage;