import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  // 모든 걸 Router 안에 넣을 필요는 없다. 하지만 Link를 사용한다면 Router 안에 넣어야 한다.
  // Router에 있는 모든 Route는 Props를 갖는다.
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
