import Paper from "@mui/material/Paper";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Typography from "@mui/material/Typography";
import Footer from "../Layout/Footer";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <div id="floater">
      <Paper
        elevation={6}
        sx={{
          paddingTop: "15px",
          backgroundColor: "#faebd7",
          minWidth: "100%",
        }}
      >
        <AboutMe />
        <div className="hidden"></div>
        <div id="projects" className="center" style={{ width: "90%" }}>
          <Typography
            variant="h4"
            sx={{
              fontStyle: "italic",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            My Projects
          </Typography>
          <Projects />
        </div>
        <div className="hidden"></div>
        <Box sx={{ paddingBottom: "2px" }}>
          <Footer />
        </Box>
      </Paper>
    </div>
  );
}
