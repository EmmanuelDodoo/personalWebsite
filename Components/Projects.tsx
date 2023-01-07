import { PrimitiveProject } from "../types";
import { projectList } from "../util/projects";
import Card from "@mui/material/Card";
import { CardActionArea, CardActions, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LaunchIcon from "@mui/icons-material/Launch";
import GithubIcon from "@mui/icons-material/GitHub";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProjectScroll from "./ProjectScroll";

const projectCard = (project: PrimitiveProject) => {
  return (
    <div key={project.name + "Card"}>
      <Box pt={1} pb={1} sx={{ whiteSpace: "normal" }} className="project-box">
        <Card raised sx={{ backgroundColor: "#FAF9F6" }}>
          <Link
            underline="none"
            href={project.visitLink ? project.visitLink : project.githubLink}
            target="_blank"
            rel="noopener"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={project.pathToPreview}
                alt={project.name + "CardPreview"}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={"bold"} color="secondary">
                  {project.name}
                </Typography>
                <Box className="projectDescBox">
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textPrimary"
                    paragraph
                    className="project-desc-content"
                  >
                    {project.shortDescripttion}
                  </Typography>
                </Box>
                <Typography fontWeight="bold" variant="body1" color="secondary">
                  Built with:
                </Typography>
                <Box className="build-tools-box">
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    className="build-tools-content"
                  >
                    {project.buildTools.join(" | ")}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions className="project-card-bottom">
            {project.visitLink ? (
              <Link
                underline="none"
                href={project.visitLink}
                target="_blank"
                rel="noonper"
              >
                <Button size="large" color={"secondary"}>
                  Visit{" "}
                  <LaunchIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "2px",
                      marginBottom: "3px",
                    }}
                  />
                </Button>
              </Link>
            ) : (
              <></>
            )}
            <Link
              underline="none"
              href={project.githubLink}
              target="_blank"
              rel="noonper"
              color={"secondary"}
            >
              <Button size="large" color="secondary">
                <GithubIcon
                  sx={{
                    fontSize: "14px",
                    marginRight: "3px",
                    marginBottom: "3px",
                  }}
                />{" "}
                GitHub Repo
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default function Projects() {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ProjectScroll>
      {projectList.map((proj) => projectCard(proj))}
    </ProjectScroll>
  );
}
