import {
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";

import { useState } from "react";

const languages = [
  {
    code: "en",
    label: "English",
  },
  {
    code: "vi",
    label: "Vietnamese",
  },
];

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [language, setLanguage] =
    useState("en");

  const open = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (
    code: string
  ) => {
    setLanguage(code);
    handleClose();

    console.log("Language:", code);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          gap: 0.5,
        }}
      >
        <LanguageIcon />

        <span
          style={{
            fontSize: 13,
          }}
        >
          {language.toUpperCase()}
        </span>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages.map((item) => (
          <MenuItem
            key={item.code}
            selected={item.code === language}
            onClick={() =>
              handleLanguageChange(item.code)
            }
          >
            <ListItemText>
              {item.label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}