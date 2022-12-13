import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyIcon from '@mui/icons-material/Money';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />


      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Orders Received"
            icon={
              <FilterFramesIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Earning in month"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Expense in Month"

            icon={
              <MoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Registered Clients"
            icon={
              <PeopleAltIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="4vh"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <StatBox
            title="320"
            subtitle="Available Drivers"

            icon={
              <HowToRegIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="710"
            subtitle="Unavailable Drivers"

            icon={
              <NoAccountsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
       
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >

          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart
              xval="Driver"
              yval="Avg. Rating"
            />

          </Box>
        </Box>


        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Order Status
          </Typography>

          <PieChart dashboard={true} />

        </Box>
        
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Cost vs Freight
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart
              value={["fuel", "maintenance", "challan"]}
              xval="freight"
              yval="Assoc: Cost"
              isDashboard={true}
            />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;