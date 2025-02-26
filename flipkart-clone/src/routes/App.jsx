import "./App.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AccountContextProvider } from "../store/account-store";
import { ItemsContextProvider } from "../store/items-store";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import FetchItems from "../components/FetchingStatus";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <AccountContextProvider>
      <ItemsContextProvider>
        <div className="app">
          <div>
            <Header></Header>

            <FetchItems></FetchItems>
            {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

            <Footer></Footer>
          </div>
        </div>
      </ItemsContextProvider>
    </AccountContextProvider>
  );
}

export default App;
