import "./styles.css";
import FileExplorer from "./components/FileExplorer/FileExplorer";
// import { fileExplorerData } from "./components/FileExplorer/data";
import { useState } from "react";

export default function App() {
  // const [explorerData, setExplorerData] = useState(fileExplorerData);

  return (
    <div className="App">
      <FileExplorer />
    </div>
  );
}
