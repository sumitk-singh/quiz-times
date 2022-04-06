import "../quiz-page/Quiz.css";

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
        <hr/>
            <h2>Result</h2>
            <h3>Your score is {pts} out of 5</h3>
            <hr/>
            <button className="game-Over" onClick={refreshPage}>Retry</button>
        </>
    )
}

export default GameOver
