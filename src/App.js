import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      
    </Provider>
  );
}

export default App;
