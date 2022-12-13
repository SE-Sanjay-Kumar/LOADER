import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDriver } from "../../data/mockData";
import Header from "../../components/Header";


const DriverView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "driver_id", headerName: "ID" },
        {
            field: "driver_name",
            headerName: "Driver Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "password",
            headerName: "Password",
            headerAlign: "left",
        },
        {
            field: "experience",
            headerName: "Years of Experience",
            flex: 1,
        },
        {
            field: "salary",
            headerName: "Salary",
            flex: 1,
        },
        {
            field: "is_available",
            headerName: "Availability",
            flex: 1,
        },
        {
            field: "food_cost",
            headerName: "Food Cost",
            flex: 1,
        },
        {
            field: "phone_number",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "license",
            headerName: "License",
            flex: 1,
        },
        {
            field: "vehicle_number",
            headerName: "Assigned Vehicle",
            flex: 1,
        },
    ];
    console.log(mockDriver.at(0));
    return (
        <Box m="20px">
            <Header title="Driver View" subtitle="Detail of drivers" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                      },
    
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDriver}
                    columns={columns}
                    getRowId={(row) => row.driver_id}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}




export default DriverView;