import { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Stack from "@mui/system/Stack/Stack";
import { Typography } from "@mui/material";
import Typed from "typed.js";

export default function AboutMe() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const aboutMeText = [
    "Hi, my name is Emmanuel. ",
    "I am a sophomore computer science student at Cornell University on a constant mission to grow and learn.",
    "I believe that education is a lifelong process and that there is always something new to discover.",
    "One of the many things I love about programming is how challenging and rewarding it can be. ^1000 I really enjoy tackling difficult problems and finding creative solutions. ^1000 This is what makes software development such an exciting and fulfilling field to me.^500",
    "I also believe that programming is a powerful tool for creating solutions to real-world problems, ^1000 and I am passionate about using my skills to make a positive impact in the world.",
  ];

  const text = useMemo(() => aboutMeText, [aboutMeText]);
  const typingRef = useRef();

  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 45,
      showCursor: false,
      StartDelay: 500,
      backSpeed: 30,
      smartBackspace: true,
    };
    //@ts-ignore
    typingRef.current = document.getElementById("typing");
    //@ts-ignore
    const typing = new Typed(typingRef.current, options);

    return () => {
      typing.destroy();
    };
  }, [text]);

  return (
    <>
      <div id="about-me" className="about-me-div">
        <Stack direction={"row"}>
          <div className="about-me-content" style={{ paddingRight: "50px" }}>
            <Image
              src={"/main.jpg"}
              alt="my profile picture"
              width={"300"}
              height={"300"}
              style={{ borderRadius: "50%" }}
              priority
            />
          </div>
          <div className="about-me-content">
            <Typography variant="h6" id="typing" className="typing"></Typography>
          </div>
        </Stack>
      </div>
    </>
  );
}
