import { Box } from "@mui/material";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line Chart for Driver Rating to ease your decisions" />
      <Box height="75vh">
        <LineChart 

            xval = "Driver"
            yval = "Avg. Rating"
        />
      </Box>
    </Box>
  );
};

export default Line;