import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDriver } from "../../../data/mockData";
import Header from "../../../components/Header";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from "react-router-dom";

const DriverContact = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    let columns = [
        {
            field: "driver_id", headerName: "ID",
            flex: 1,
        },
        {
            field: "driver_name",
            headerName: "Driver Name",
            flex: 1,
        },
        {
            field: "phone_number",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Whatsapp Chat',
            sortable: false,
            filterable: false,
            renderCell: (params) => {
                
                const onClick = (e) => {
                    e.stopPropagation();
                    const api = params.api;
                    const thisRow = {};
                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        );
                    navigate('/w-message', {state: {data: thisRow}});
                };
                return <WhatsAppIcon onClick={onClick} />;
            },
        },
        
    ];
    return (
        <Box m="20px">
            <Header title="Driver Contacts!" 
            subtitle="Contact your drivers for any announcment." />
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
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </Box>
    );
}




export default DriverContact;