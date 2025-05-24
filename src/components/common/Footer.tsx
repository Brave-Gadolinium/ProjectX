// src/components/common/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import "../../assets/style/footer.css";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        display: "flex",
        justifyContent: "spaceBetween",
        alignitems: "center",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.secondary,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        textAlign: "center",
      }}
    >
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f icon"></i>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-google-plus-g icon"></i>
          </a>
        </li>
      </ul>
      {/* Основная подпись */}
      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} Teacher App. Все права защищены.
      </Typography>

      {/* Информация о создателе */}
      <Typography variant="caption" color="text.secondary">
        Разработано: John Doe • {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
