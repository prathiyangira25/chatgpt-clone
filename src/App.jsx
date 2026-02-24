import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chatwindow";
import { dummyChats } from "./data/dummyChats";

function App() {
  const [chats, setChats] = useState(dummyChats);
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(true);

  const selectedChat = chats.find((c) => c.id === selectedId);

  const update = (msgs) => {
    setChats((prev) =>
      prev.map((c) => (c.id === selectedId ? { ...c, messages: msgs } : c)),
    );
  };

  const newChat = () => {
    const chat = { id: Date.now(), title: "New Chat", messages: [] };
    setChats((p) => [chat, ...p]);
    setSelectedId(chat.id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "#212121",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: open ? 260 : 0,
          transition: "width 0.3s ease",
          bgcolor: "#171717",
          overflow: "hidden",
        }}
      >
        <Sidebar
          chats={chats}
          select={setSelectedId}
          create={newChat}
          close={() => setOpen(false)}
        />
      </Box>
      <ChatWindow
        chat={selectedChat}
        update={update}
        open={() => setOpen(true)}
        openState={open}
        createFirstChat={newChat}
      />
    </Box>
  );
}

export default App;
