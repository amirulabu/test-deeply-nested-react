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
        <div>
          Error 1: <Error />
        </div>
        <div>
          Error 2: <Error2 />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
