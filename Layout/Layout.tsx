import { Container } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Prop = {
  children?: ReactNode;
};
export default function Layout({ children }: Prop) {
  return (
    <>
      <Head>
        <title>Emmanuel</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/main.jpg" />
      </Head>
      <Navbar />
      <div >{children}</div>
      {/* Footer in `Home` Component */}
    </>
  );
}
