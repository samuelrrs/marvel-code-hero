import Footer from "./components/Footer";
import Header from "./components/Header";
import PageProvider from "./context/PaginationContext";
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
        <Footer />
      </PageProvider>
    </>
  );
}

export default App;
