import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockCustomers } from "../../../data/mockData";
import Header from "../../../components/Header";

const RegisteredClients = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let columns = [
        {
            field: "customer_id", headerName: "ID",
            flex: 1,
        },
        {
            field: "name",
            headerName: "Customer Name",
            flex: 1,
        },
        {
            field: "company_detail",
            headerName: "Company Detail",
            flex: 1,
        },
        {
            field: "phone_number",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "cnic",
            headerName: "CNIC",
            flex: 1,
        },
        
        
    ];
    return (
        <Box m="20px">
            <Header title="Registered Clients!" 
            subtitle="Check Out who is registered with your company!" />
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
                    rows={mockCustomers}
                    columns={columns}
                    getRowId={(row) => row.customer_id}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </Box>
    );
}




export default RegisteredClients;