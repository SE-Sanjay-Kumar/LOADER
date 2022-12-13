import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  TMS
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Info.
            </Typography>


            <Item
              title="Drivers' Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Registered Clients"
              to="/reg-clients"
              icon={<VerifiedUserOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>


            <SubMenu title="Driver" icon={<GroupOutlinedIcon />}>
              <Item
                title="View Drivers"
                to="/view-driver"
                icon={<TableViewOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Add Drivers"
                to="/add-driver"
                icon={<PersonAddOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Health Status"
                to="/driver-healthstatus"
                icon={<MedicalInformationOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu title="Freight" icon={<LocalShippingOutlinedIcon />}>
              <Item
                title="View Freight"
                to="/view-freight"
                icon={<TableViewOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Add Freight"
                to="/add-freight"
                icon={<ControlPointOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

            </SubMenu>
            <SubMenu title="Order" icon={<InventoryOutlinedIcon />}>
              <Item
                title="Orders Received"
                to="/view-orders"
                icon={<TableViewOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Bidding Requests"
                to="/order-bidding"
                icon={<DiscountOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Order Hisotry"
                to="/order-history"
                icon={<HistoryOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
             
            </SubMenu>
            <SubMenu title="Feedback" icon={<FeedbackOutlinedIcon />}>
                <Item
                  title="Client"
                  to="/client-feedback"
                  icon={<StarHalfOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Driver"
                  to="/driver-feedback"
                  icon={<StarRateOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
            <SubMenu title="Utility" icon={<MiscellaneousServicesOutlinedIcon />}>
              

              <Item
                title="Chat"
                to="/start-chat"
                icon={<MarkUnreadChatAltOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/view-calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/view-faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Analytics
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;