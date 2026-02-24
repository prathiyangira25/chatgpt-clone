import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import AppsIcon from "@mui/icons-material/Apps";
import ExploreIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";

function Sidebar({ chats, select, create, close }) {
  const menuOptions = [
    { text: "New chat", icon: <CreateIcon fontSize="small" />, action: create },
    { text: "Search chats", icon: <SearchIcon fontSize="small" /> },
    { text: "Images", icon: <ImageIcon fontSize="small" /> },
    { text: "Apps", icon: <AppsIcon fontSize="small" /> },
    { text: "Codex", icon: <CodeIcon fontSize="small" /> },
    { text: "Explore GPTs", icon: <ExploreIcon fontSize="small" /> },
  ];

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#171717",
        color: "#ececec",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: "1px solid #303030",
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-start" }}>
        <IconButton onClick={close} size="small">
          <MenuOpenIcon sx={{ color: "#b4b4b4" }} />
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", px: 1 }}>
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={item.action}
                sx={{ borderRadius: 2, py: 0.8 }}
              >
                <ListItemIcon sx={{ minWidth: 35, color: "#b4b4b4" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Typography
          variant="caption"
          sx={{
            px: 2,
            color: "#676767",
            fontWeight: "bold",
            mt: 2,
            display: "block",
          }}
        >
          Recent
        </Typography>

        <List>
          {chats.map((c) => (
            <ListItem key={c.id} disablePadding>
              <ListItemButton
                onClick={() => select(c.id)}
                sx={{ borderRadius: 2, py: 0.5 }}
              >
                <ListItemText
                  primary={c.messages[0]?.text || "New Chat"}
                  primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                    color: "#ececec",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 1.5 }}>
        <Divider sx={{ bgcolor: "#303030", mb: 1.5 }} />
        <ListItemButton sx={{ borderRadius: 2, px: 1 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              mr: 1.5,
              bgcolor: "#5436da",
              fontSize: 12,
            }}
          >
            PD
          </Avatar>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
            Prathiyangira Devi
          </Typography>
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default Sidebar;
