import { useEffect, useState, useRef } from "react";

const Folder = (props) => {
  const { object, fileExplorerData, setFileExplorerData } = props;
  const [isFolderExpanded, setIsFolderExpanded] = useState(false);
  const [inputData, setInputData] = useState({
    isVisible: false,
    content: "",
    isFolder: false,
  });
  const inputRef = useRef();

  useEffect(() => {
    if (inputData.isVisible) {
      inputRef.current.focus();
    }
  }, [inputData.isVisible]);

  function handleAddFileOrFoler(e, isFolder) {
    e.stopPropagation();
    if (isFolderExpanded === false) {
      setIsFolderExpanded(true);
    }
    setInputData({
      ...inputData,
      isVisible: true,
      isFolder: isFolder ? true : false,
    });
  }

  function handleInputBlur() {
    if (!inputData.content) {
      setInputData({ ...inputData, isVisible: false });
    } else {
      let obj = {
        ID: new Date().getTime(),
        name: inputData.content,
        isFolder: inputData.isFolder,
        parentID: object.ID,
        children: [],
      };
      object.children.unshift(obj.ID);
      setFileExplorerData({ ...fileExplorerData, [obj.ID]: obj });
      setInputData({ ...inputData, isVisible: false });
    }
  }

  function handleDeleteItem(e, itemID, isFolder) {
    e.stopPropagation();
    let explorerData = { ...fileExplorerData };
    let parentID = object.parentID;

    if (parentID === null) {
      setFileExplorerData({});
      return;
    }

    if (!isFolder) {
      delete explorerData[itemID];
      explorerData[parentID].children = explorerData[parentID].children.filter(
        (ID) => ID != itemID
      );
      console.log("explorerData", explorerData);
      setFileExplorerData(explorerData);
    } else {
      delete explorerData[itemID];
      explorerData[parentID].children = explorerData[parentID].children.filter(
        (ID) => ID != itemID
      );
      object.children.forEach((child) => {
        handleDeleteItem(e, child.ID, child.isFolder);
      });
      setFileExplorerData(explorerData);
    }
  }

  if (!object) {
    return;
  }

  if (object.isFolder) {
    return (
      <>
        <div
          className="explorer-item folder"
          onClick={() => setIsFolderExpanded(!isFolderExpanded)}
        >
          📁{object.name}
          <div>
            <button onClick={(e) => handleAddFileOrFoler(e, true)}>+ 📁</button>
            <button onClick={(e) => handleAddFileOrFoler(e, false)}>
              + 📄
            </button>
            <button onClick={(e) => handleDeleteItem(e, object.ID, true)}>
              ❌
            </button>
          </div>
        </div>

        <div
          style={{
            marginLeft: "25px",
            display: isFolderExpanded ? "block" : "none",
          }}
        >
          {inputData.isVisible && (
            <div className="input-container">
              {inputData.isFolder ? <span> 📁</span> : <span>📄</span>}

              <input
                type=" text"
                autoFocus={true}
                ref={inputRef}
                onBlur={() => handleInputBlur()}
                onChange={(e) =>
                  setInputData({ ...inputData, content: e.target.value })
                }
              />
            </div>
          )}
          {object.children.map((childID) => {
            return (
              <Folder
                object={fileExplorerData[childID]}
                key={childID}
                fileExplorerData={fileExplorerData}
                setFileExplorerData={setFileExplorerData}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="explorer-item file">
          📄{object.name}
          <div>
            <button onClick={(e) => handleDeleteItem(e, object.ID, false)}>
              ❌
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Folder;
