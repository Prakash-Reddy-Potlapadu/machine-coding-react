import { useState } from "react";
import { explorerData } from "./data";
import Folder from "./Folder";
import "./css/file-explorer.css";

const FileExplorer = () => {
  const [fileExplorerData, setFileExplorerData] = useState(explorerData);

  let rootFolder;
  for (let key in fileExplorerData) {
    let obj = fileExplorerData[key];
    if (obj.parentID === null) {
      rootFolder = obj;
      break;
    }
  }

  return (
    <Folder
      object={rootFolder}
      fileExplorerData={fileExplorerData}
      setFileExplorerData={setFileExplorerData}
    />
  );
};

export default FileExplorer;
