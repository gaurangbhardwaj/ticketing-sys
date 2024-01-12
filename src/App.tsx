import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
// import { Provider } from "react-redux";
// import store from "./store";
import System from "./components/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App: React.FC = () => {
  return (
    // <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <System />
    </ThemeProvider>
    // </Provider>
  );
};

export default App;
