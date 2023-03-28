import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Post from "./components/Post";
import Posts from "./components/Posts";
import PrivateOutlet from "./components/PrivateOutlet";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />
        <Route path="/hello/*" element={<Hello />}>
            <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/posts/*" element={<Posts />} />
        
        <Route path="/login" element={<Login />} />

        {/* private route */}
        {/* <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
        <Route path="/posts/:postId" element={<PrivateRoute>
          <Post />
        </PrivateRoute>} /> */}

        {/* another and more effective way of using private route */}
        <Route path="/*" element={<PrivateOutlet/>}>
          <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
          <Route path="posts/:postId" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
