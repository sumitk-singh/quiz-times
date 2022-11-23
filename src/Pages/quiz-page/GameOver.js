import "../quiz-page/Quiz.css";

const GameOver = ({ pts }) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <hr />
            <h2>𖧵 Result 𖧵</h2>
            <hr />
            <h3>Your score is <span id="text-big">{pts} /10</span> points</h3>
            <hr />

           <button className="game-Over-btn" onClick={refreshPage}>Retry</button>
        
        </>
    )
}

export default GameOver
