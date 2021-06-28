import Header from "./components/Header";
import PageProvider from "./context/StatesContext";
import Routes from "./routes/routes";
import "./styles/global.css";

function App() {
  return (
    <>
      <PageProvider>
        <Header />
        <div className="App">
          <Routes />
        </div>
      </PageProvider>
    </>
  );
}

export default App;
