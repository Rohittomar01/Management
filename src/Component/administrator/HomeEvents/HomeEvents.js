import { Box, Typography } from "@mui/material";
import HomeEvent_Cards from "./HomeEvent_Cards/HomeEvent_Cards";
// import icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function HomeEvents() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box>
      <Box>
        <Box>
          <HomeEvent_Cards />
        </Box>
      </Box>
    </Box>
  );
}
