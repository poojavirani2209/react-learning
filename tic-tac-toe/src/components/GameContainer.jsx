import GameBoard from "./GameBoard";
import Player from "./Player";

export default function GameContainer() {
    return (
        <>
            <Player name="player1" symbol="X"></Player>
            <Player name="player2" symbol="O"></Player>
            <GameBoard></GameBoard>
        </>
    );
}