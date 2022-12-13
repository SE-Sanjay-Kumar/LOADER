import "./index.css";
import io from "socket.io-client";
import Message from "./Messsage"
import { useState, useEffect} from "react";
import { useLocation} from "react-router-dom";
import Header from "../../../../components/Header";
import { Box } from "@mui/material";


function Chat() {
  const [socket,setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const location = useLocation();
  const dataObject = location.state.data;
  console.log(dataObject);
  useEffect(()=>{
    setSocket(io.connect("http://localhost:3001"));
    setUsername("admin");
    setRoom(dataObject.customer_id);
  },[dataObject])

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };


  return (
    <Box  m={2}>

      <Header title="In app Chat" subtitle="chat with clients with one tap!" />
      <Box className="container" m="4vh">
      {!showChat ? (
        <Box className="joinChatContainer">
          <h2>Join A Chat</h2>
          
          <input
            type="text"
            placeholder="John ?"
            value={username}
            readOnly
            required
          />
          <input
            type="text"
            placeholder="Room ID ?"
            value={room}
            readOnly
            required
          />
          <button onClick={joinRoom}>Join A Room</button>
        </Box>
      ) : (
        <Message socket={socket} username={username} room={room} />
      )}
      </Box>
    </Box>
  );
}





export default Chat;
