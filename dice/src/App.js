import Board from "./Board";
import {useState} from "react";
import Button from "./Button";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };

    return (
        <div>
            <div>
                <Button color="blue" onClick={handleRollClick}>던지기</Button>
                <Button color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory}></Board>
                <Board name="상대" color="red" gameHistory={otherHistory}></Board>
            </div>
        </div>
    );
}

export default App;
