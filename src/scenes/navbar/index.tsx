import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { FlexBetween } from "@/components/FlexBetween";
import ApiIcon from "@mui/icons-material/Api";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <AppBar sx={{ background: "#1F2026" }}>
      <Toolbar>
        <Container maxWidth="xl">
          <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            <Box display="flex" gap={1} alignItems="center">
              <ApiIcon sx={{ fontSize: "28px" }} />
              <Typography>Finanseer</Typography>
            </Box>
            <Box display="flex" gap={5}>
              <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                <Link
                  to="/"
                  onClick={() => setSelected("dashboard")}
                  style={{
                    color:
                      selected === "dashboard" ? "inherit" : palette.grey[700],
                    textDecoration: "inherit",
                  }}
                >
                  Dashboard
                </Link>
              </Box>
              <Box>
                <Link
                  to="/predictions"
                  onClick={() => setSelected("predictions")}
                  style={{
                    color:
                      selected === "predictions"
                        ? "inherit"
                        : palette.grey[700],
                    textDecoration: "inherit",
                  }}
                >
                  Predictions
                </Link>
              </Box>
            </Box>
          </FlexBetween>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
