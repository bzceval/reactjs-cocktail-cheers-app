import "./App.css";
import AppRouter from "./router/AppRouter";
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <AppRouter>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </AppRouter>
    </ContextProvider>
  );
}

export default App;
