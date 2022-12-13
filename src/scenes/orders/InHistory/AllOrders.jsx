import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockOrders } from "../../../data/mockData";
import Header from "../../../components/Header";

const ViewOrders = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "order_id", headerName: "ID",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "type_of_vehicle",
            headerName: "Vehicle Type",
            flex: 1,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 1,
        },
        {
            field: "order_status",
            headerName: "Status",
            flex: 1,
        },
        {
            field: "schedule",
            headerName: "Schedule",
            headerAlign: "left",
        },
        {
            field: "payment_method",
            headerName: "Payment Mode",
            flex: 1,
        },

        {
            field: "is_fragile",
            headerName: "Is Fragile",
            flex: 1,
        },
        {
            field: "pickup_location",
            headerName: "PickUp",
            flex: 1,
        },
        {
            field: "dropoff_location",
            headerName: "Drop Off ",
            flex: 1,
        },
        {
            field: "no_of_labour",
            headerName: "No. Labours",
            flex: 1,
        },
    ];
    const mockOrder = mockOrders.filter(order => {
        const status = order.order_status;
        return status!== 'pending' && status!== 'bidding';
      });
    return (
        <Box m="20px">
            <Header title="Order History" subtitle="check details of previous orders" />
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
                    rows={mockOrder}
                    columns={columns}
                    getRowId={(row) => row.order_id}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}




export default ViewOrders;