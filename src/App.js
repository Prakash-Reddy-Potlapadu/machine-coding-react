import "./styles.css";
import HomePage from "./components/HomePage";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import Comments from "./components/Comments";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/fileexplorer" element={<FileExplorer />} />
                    <Route path="/nestedcomments" element={<Comments />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
