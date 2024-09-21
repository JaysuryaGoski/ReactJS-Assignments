import { useEffect, useState } from "react";
import Card from "./Card";

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: "/img/brown.jpg", stat: "" },
        { id: 2, img: "/img/cat.jpg", stat: "" },
        { id: 3, img: "/img/husky.jpg", stat: "" },
        { id: 4, img: "/img/lab.jpg", stat: "" },
        { id: 5, img: "/img/lion.jpg", stat: "" },
        { id: 6, img: "/img/newfoundland.jpg", stat: "" },
        { id: 7, img: "/img/wolf.jpg", stat: "" },
        { id: 8, img: "/img/shephard.jpg", stat: "" },
        { id: 1, img: "/img/brown.jpg", stat: "" },
        { id: 2, img: "/img/cat.jpg", stat: "" },
        { id: 3, img: "/img/husky.jpg", stat: "" },
        { id: 4, img: "/img/lab.jpg", stat: "" },
        { id: 5, img: "/img/lion.jpg", stat: "" },
        { id: 6, img: "/img/newfoundland.jpg", stat: "" },
        { id: 7, img: "/img/wolf.jpg", stat: "" },
        { id: 8, img: "/img/shephard.jpg", stat: "" }
    ].sort(() => Math.random() - 0.2));

    const [prev, setPrev] = useState(-1);
    const [moves, setMoves] = useState(0);
    const [pairsMatched, setPairsMatched] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [bestScore, setBestScore] = useState(() => parseInt(localStorage.getItem('bestscore')) || null);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (pairsMatched === 8) {
            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
            if (!bestScore || timeTaken < bestScore) {
                localStorage.setItem('bestscore', timeTaken);
                setBestScore(timeTaken);
            }
            alert(`Game over! You took ${timeTaken} seconds`);
            setGameStarted(false);
        }
    }, [pairsMatched, startTime, bestScore]);
    

    useEffect(() => {
        if (gameStarted) {
            const timer = setTimeout(() => {
                setItems(items.map(item => ({ ...item, stat: "" })));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [gameStarted,items]);

    function check(current) {
        if (current === prev) {
            items[current].stat = "";
            setItems([...items]);
            setPrev(-1);
            return;
        }
    
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
            setPairsMatched(pairsMatched + 1);
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
            setMoves(moves + 1);
        }
    }
    

    function handleClick(id) {
        if (!startTime) {
            setStartTime(Date.now());
        }
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);
        }
    }

    function startGame() {
        setItems(items.map(item => ({ ...item, stat: "active" })).sort(() => Math.random() - 0.2));
        setPrev(-1);
        setMoves(0);
        setPairsMatched(0);
        setStartTime(0);
        setGameStarted(true);
    }

    return (
        <>
            {!gameStarted ? (
                <button onClick={startGame} className="start-button">Start Game</button>
            ) : (
                <>
                    <div className="container">
                        {items.map((item, index) => (
                            <Card item={item} key={index} id={index} handleClick={handleClick} />
                        ))}
                    </div>
                    <div className="game-info">
                        <p>Moves: {moves}</p>
                        <p>Best Score: {bestScore ? `${bestScore} seconds` : "N/A"}</p>
                        <p>Pairs Matched: {pairsMatched}</p>
                    </div>
                </>
            )}
        </>
    );
}

export default Cards;
