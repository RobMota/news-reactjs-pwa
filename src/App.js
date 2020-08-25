import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Router>
            <Switch>
              <Route path="/:subject/:id">
                <Post />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </section>
      </main>
    </div>
  );
}

export default App;
