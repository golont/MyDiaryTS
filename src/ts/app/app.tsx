import React from "react";

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1 className="title">Hello types</h1>
                <button
                    onClick={() => {
                        console.log("somethin");
                    }}
                >
                    something
                </button>
            </div>
        </>
    );
};

export default App;
