// App.js
import React from "react";

import DayIndex from "./components/Day/DayIndex";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactQueryIndex from "./components/ReactQuery/ReactQueryIndex";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const defaultTheme = createTheme();

  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <DayIndex />

        <ReactQueryDevtools />
      </QueryClientProvider>

      {/* <ReactQueryIndex/> */}
    </ThemeProvider>
  );
}

export default App;
