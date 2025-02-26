import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import { MdOutlineViewSidebar, MdViewSidebar } from "react-icons/md";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListContextProvider from "./store/post-list-store";
import Info from "./components/Info";
import Help from "./components/Help";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [sidebar, setSidebar] = useState(false);

  return (
    <PostListContextProvider>
      <div className="app-container">
        {!sidebar && (
          <div className="my-btn-div">
            <button className="my-btn" onClick={() => setSidebar(!sidebar)}>
              <MdOutlineViewSidebar className="toggle" />
            </button>
          </div>
        )}

        {sidebar && (
          <Sidebar
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
          ></Sidebar>
        )}

        <div>
          {selectedIcon === "Home" && (
            <HomePage
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            ></HomePage>
          )}
          {selectedIcon === "Home" && <PostList></PostList>}

          {selectedIcon === "Create Post" && (
            <div>
              <HomePage
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              ></HomePage>
              <CreatePost setSelectedIcon={setSelectedIcon}></CreatePost>
            </div>
          )}
          {selectedIcon === "Info" && (
            <div>
              <HomePage
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              ></HomePage>
              <Info />
            </div>
          )}
          {selectedIcon === "Help" && (
            <div>
              <HomePage
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              ></HomePage>
              <Help />
            </div>
          )}
          {selectedIcon === "Feedback" && (
            <div>
              <HomePage
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              ></HomePage>
              <Feedback />
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </PostListContextProvider>
  );
}

export default App;
