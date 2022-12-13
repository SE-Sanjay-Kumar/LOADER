import { Box } from "@mui/material";
import Header from "../../../components/Header";
import BarChart from "../../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart for cost associated with freight" />
      <Box height="75vh">
        {/* <BarChart value={["fuel_cost", "maintain_cost", "avg_driver_pay", "challan_cost"]}
            xval="Freight"
            yval="Assoc: Cost"
        /> */}
        <BarChart value={["fuel", "maintenance", "challan"]}
            xval="freight"
            yval="Assoc: Cost"
        />
      </Box>
    </Box>
  );
};

export default Bar;