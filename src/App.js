import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar  from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import DriverView from './scenes/drivers/ViewDriver';
import AddDriver from './scenes/drivers/AddDriver'
import Calendar from './scenes/utilityservice/Calendar'
import FAQ from './scenes/utilityservice/Faq'
import ViewFreight from './scenes/freight/ViewFreight'
import AddFreight from './scenes/freight/AddFreight'
import DriverHealth from './scenes/drivers/DriverHealth'
import ViewOrders from './scenes/orders/Pending/ViewOrders';
import ClientFeedback from './scenes/utilityservice/feedback/ClientFeedback'
import DriverFeedback from './scenes/utilityservice/feedback/DriverFeedback';
import AssignOrder from './scenes/orders/Pending/AssignOrder';
import AllOrders from './scenes/orders/InHistory/AllOrders'
import BiddingRequest from './scenes/orders/BidState/BiddingRequest';
import BidOrderDetail from './scenes/orders/BidState/BidOrderDetail'
import StartChat from './scenes/utilityservice/chat'
import Chat from './scenes/utilityservice/chat/InappChat/Chat';
import WMessage  from "./scenes/utilityservice/chat/WChat/WMessage";
import PieChart from "./scenes/analytics/Pie"
import BarChart from "./scenes/analytics/Bar"
import Line from "./scenes/analytics/Line"
import DriverContact from './scenes/info/drivercontact';
import RegisteredClients from './scenes/info/registered-clients';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className='content'>
              <Topbar/>
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                
                <Route path='/contacts' element={<DriverContact/>} />
                <Route path='/reg-clients' element={<RegisteredClients/>} />


                <Route path='/view-driver' element={<DriverView/>} />
                <Route path='/add-driver' element={<AddDriver/>} />
                <Route path='/driver-healthstatus' element={<DriverHealth/>}/>

                <Route path='/view-freight' element={<ViewFreight/>} />
                <Route path='/add-freight' element={<AddFreight/>} />

                <Route path='/view-orders' element={<ViewOrders/>} />
                <Route path='/assign-order' element={<AssignOrder/>}/>
                <Route path='/order-history' element={<AllOrders/>}/>
                <Route path='/order-bidding' element={<BiddingRequest/>}/>
                <Route path="/inbid-detail" element={<BidOrderDetail/>}/>

                <Route path="/pie" element={<PieChart/>}/>
                <Route path="/bar" element={<BarChart/>}/>
                <Route path='/line' element={<Line/>}/>

                <Route path='/view-calendar' element={<Calendar/>} />
                <Route path='/start-chat' element={<StartChat/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/w-message' element={<WMessage/>}/>
                <Route path='/client-feedback' element={<ClientFeedback/>} />
                <Route path='/driver-feedback' element={<DriverFeedback/>} />
                <Route path='/view-faq' element={<FAQ/>}/>
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

