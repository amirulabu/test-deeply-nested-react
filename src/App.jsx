import "./App.css";
import Index from "./pages/index";
import { MantineProvider } from "@mantine/core";
import Error from "./jotai-components/Error";
import Error2 from "./reducer-components/Error2";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Index />

      <div>
        <Error />
        <Error2 />
      </div>
    </MantineProvider>
  );
}

export default App;
