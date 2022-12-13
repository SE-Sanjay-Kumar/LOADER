import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockHealthStatus } from "../../data/mockData";
import Header from "../../components/Header";


const DriverHealth = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "driver_id", headerName: "ID"},
        {
            field: "driver_name",
            headerName: "Driver Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "resting_hours",
            headerName: "Resting Hours",
            flex: 1,
        },
        {
            field: "body_temperature",
            headerName: "Body Temperature",
            flex: 1,
        },
        {
            field: "disease",
            headerName: "Disease",
            flex: 1,
        },
    ];
    return (
        <Box m="20px">
            <Header title="Health Status" subtitle="Details of health status of drivers" />
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
                    rows={mockHealthStatus}
                    columns={columns}
                    getRowId={(row) => row.driver_id}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}




export default DriverHealth;