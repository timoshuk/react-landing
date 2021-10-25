import Header from "./components/header";
import FullPageBlock from "./components/fuul-screen-block";

import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">
        <FullPageBlock>
          <h2>Block 1</h2>
        </FullPageBlock>
        <FullPageBlock>
          <h2>Block 2</h2>
        </FullPageBlock>
        <FullPageBlock>
          <h2>Block 3</h2>
        </FullPageBlock>
      </div>
    </div>
  );
}

export default App;
