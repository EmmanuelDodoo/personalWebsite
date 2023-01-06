import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette:{
    primary:{
      main: '#faebd7'
    },
    secondary:{
      main:'#356bad'
    }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
