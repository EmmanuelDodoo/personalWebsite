import { ReactNode, useEffect, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

type Prop = {
  children?: ReactNode;
};

export default function ProjectScroll({ children }: Prop) {
  const scrollContainer = useRef<HTMLElement | null>();
  const leftScroll = useRef<HTMLElement | null>();
  const rightScroll = useRef<HTMLElement | null>();

  useEffect(() => {
    scrollContainer.current = document.getElementById("scrollContainer");
    leftScroll.current = document.getElementById("leftScrollButton");
    rightScroll.current = document.getElementById("rightScrollButton");

    leftScroll.current?.addEventListener("click", () => {
      scrollContainer.current?.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    });
    rightScroll.current?.addEventListener("click", () => {
      scrollContainer.current?.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="projects-list-div">
      <IconButton
        id="leftScrollButton"
        aria-label="Left Scroll button"
        className="vertical-center"
      >
        <ChevronLeftIcon fontSize="large"/>
      </IconButton>
      <section id="scrollContainer">{children}</section>
      <IconButton id="rightScrollButton" aria-label="Right Scroll Button" className="vertical-center">
        <ChevronRightIcon fontSize="large"/>
      </IconButton>
    </div>
  );
}
