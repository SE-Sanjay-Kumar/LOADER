import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockFreight } from "../../data/mockData";
import Header from "../../components/Header";


const ViewFreight = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "vehicle_id", headerName: "ID" },
        {
            field: "vehicle_name",
            headerName: "Vehicle Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "mileage",
            headerName: "Mileage",
            flex: 1,
        },
        {
            field: "fuel_cost",
            headerName: "Fuel Cost",
            flex: 1,
        },
        {
            field: "availability_status",
            headerName: "Availability",
            flex: 1,
        },
        {
            field: "maintenance_cost",
            headerName: "Maintenance Cost",
            flex: 1,
        },
        {
            field: "type",
            headerName: "Type of Vehicle",
            flex: 1,
        },
        {
            field: "weight_carry",
            headerName: "Weight Carry",
            flex: 1,
        },
    ];
    return (
        <Box m="20px">
            <Header title="View Freight" subtitle="Detail about freight" />
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
                    rows={mockFreight}
                    columns={columns}
                    getRowId={(row) => row.vehicle_id}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}




export default ViewFreight;