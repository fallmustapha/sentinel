import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { useSelector } from "react-redux";
import {} from "@mui"
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import NavBarContainer from "./components/NavBar";
import SideBar from "./components/SideBar";
import { side_bar_state_selector } from "./redux/navigation/selectors";

function App() {
  const theme = {
    palette: {
      primary: {
        main: "#6073E0",
        light: "#ffffff",
        dark: "#172B4D",
      },
      secondary: {
        main: "#ff7200",
        light: "#FBAF41",
        dark: "#F13F5A",
      },
    },
    zIndex: {
      drawer: 1200,
    },
    drawer: {
      width: 240,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex"
          flexDirection="row">
        <SideBar></SideBar>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width:"100%",
            height:"calc(100%)" 
          }}
          alignSelf="flex-end"
        >
          <NavBarContainer></NavBarContainer>
          <MainContent></MainContent>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
