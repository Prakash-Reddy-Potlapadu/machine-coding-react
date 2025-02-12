import React from "react";
import "./css/HomePage.css";

const HomePage = () => {
    return (
        <header>
            <nav>
                <ul className="navigation-list">
                    <li>
                        <a href="/fileexplorer" target="_blank">
                            File Explorer
                        </a>
                    </li>
                    <li>
                        <a href="/nestedcomments" target="_blank">
                            Nested Comments
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HomePage;
