import { Box, TextField, IconButton, Typography, Stack } from "@mui/material";
import {
  Send as SendIcon,
  Menu as MenuIcon,
  Add as AddIcon,
  MicNone as MicIcon,
  OpenInNew as ShareIcon,
  MoreHoriz as MoreIcon,
} from "@mui/icons-material";
import { useState } from "react";
import Message from "./Message";

function ChatWindow({ chat, update, open, openState, createFirstChat }) {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = {
      sender: "bot",
      text: Array(3).fill(input.trim()).join(" "),
    };

    if (!chat) {
      createFirstChat();
      setInput("");
    } else {
      update([...chat.messages, userMsg, botMsg]);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#212121",
      }}
    >
      {/* Top Header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {!openState && (
            <IconButton onClick={open} size="small">
              <MenuIcon sx={{ color: "#b4b4b4" }} />
            </IconButton>
          )}
          <Typography sx={{ color: "#ececec", fontWeight: 600 }}>
            ChatGPT 4o
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton size="small">
            <ShareIcon sx={{ color: "#b4b4b4", fontSize: 20 }} />
          </IconButton>
          <IconButton size="small">
            <MoreIcon sx={{ color: "#b4b4b4", fontSize: 20 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Center content or Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!chat || chat.messages.length === 0 ? (
          <Box sx={{ m: "auto", textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
            >
              ChatGPT
            </Typography>
            <Typography sx={{ color: "#b4b4b4", fontSize: 18 }}>
              How can I help you today?
            </Typography>
          </Box>
        ) : (
          <Box sx={{ maxWidth: 800, width: "100%", mx: "auto", p: 3 }}>
            {chat.messages.map((m, i) => (
              <Message key={i} message={m} />
            ))}
          </Box>
        )}
      </Box>

      {/* Input Field with White Text */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            bgcolor: "#2f2f2f",
            borderRadius: "28px",
            border: "1px solid #3a3a3a",
            p: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <AddIcon sx={{ color: "white" }} />
          </IconButton>
          <TextField
            fullWidth
            placeholder="Message ChatGPT"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())
            }
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              px: 1,
              "& .MuiInputBase-input": { color: "#ffffff", fontSize: 16 },
            }}
          />
          <IconButton size="small">
            <MicIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            onClick={send}
            sx={{
              bgcolor: input.trim() ? "white" : "#444",
              color: "black",
              width: 32,
              height: 32,
            }}
          >
            <SendIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatWindow;
