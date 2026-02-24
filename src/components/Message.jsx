import { Box, Typography } from "@mui/material";

function Message({ message }) {
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 3,
        mt: 1,
       
        alignItems: isUser ? "flex-end" : "flex-start",
      }}
    >
      <Box
        sx={{
          maxWidth: "85%",
          width: "fit-content",
          bgcolor: isUser ? "#2f2f2f" : "transparent", 
          px: isUser ? 2 : 0,
          py: isUser ? 1 : 0,
          borderRadius: "18px",
        }}
      >
        <Typography
          sx={{
            color: "#ececec",
            fontSize: "1rem",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {message.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default Message;