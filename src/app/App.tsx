import React from "react";
import RootRoutes from "routes";
import { store } from "store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  );
}

export default App;
