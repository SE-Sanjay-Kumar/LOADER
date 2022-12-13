import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockOrders } from "../../../data/mockData";
import Header from "../../../components/Header";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {useNavigate} from 'react-router-dom';

const BiddingRequest = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    let columns = [
        {
            field: "order_id", headerName: "ID",
            flex: 1,
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
            editable: true

        },

        {
            field: 'action_1',
            headerName: 'Request',
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


                    console.log('In Bidding Request', thisRow);

                };
                return <ExitToAppOutlinedIcon onClick={onClick} />;
            },
        },
        {
            field: 'action_2',
            headerName: 'Approve',
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
                    const value = mockOrders.find(obj => {
                        return obj.order_id === thisRow.order_id;
                    });
                    (value.price !== thisRow.price)? console.log("can't") : 
                    console.log('In Order Approval', thisRow);

                };
                return <RecommendOutlinedIcon onClick={onClick} />;
            },
        },
        {
            field: 'action_3',
            headerName: 'Cancel',
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
                    console.log('In Order Cancel', thisRow);
                };
                return <CancelPresentationOutlinedIcon onClick={onClick} />;
            },
        },
        {
            field: 'action_4',
            headerName: 'Details',
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
                    const value = mockOrders.find(obj => {
                        return obj.order_id === thisRow.order_id;
                    });
                    
                    console.log('Details', value);
                    navigate('/inbid-detail', {state: {data: value}})
                };
                return <MoreHorizOutlinedIcon onClick={onClick} />;
            },
        },

    ];

    const mockOrder = mockOrders.filter(order => {
        const status = order.order_status;
        return status === 'bidding';
    });
    return (
        <Box m="20px">
            <Header title="Bidding Requests" subtitle="All notifications of bidding requests" />
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
                    experimentalFeatures={{ newEditingApi: true }}
                    components={{ Toolbar: GridToolbar }}
                    onCellEditStart={(e) => {

                        console.log(e.row.order_id);
                    }}
                />
            </Box>
        </Box>
    );
}




export default BiddingRequest;