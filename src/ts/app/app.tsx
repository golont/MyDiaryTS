import React from "react";
import Button from "Components/button";

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1 className="title">Hello types</h1>
                <Button />
                <Button outside={true} href="https://www.twitch.tv/dinablin"/>
                <Button href="lol"/>
            </div>
        </>
    );
};

export default App;
