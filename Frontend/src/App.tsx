import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component/commons/header";
import { Home } from "./component/pages/home/home";
import { Footer } from "./component/commons/footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        mt={"64px"}
      >
        <Box sx={{ padding: 2, width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <Box width={"100%"}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
