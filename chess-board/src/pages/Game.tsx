import { useEffect, useState } from "react"
import { useSocket } from "../components/useSocket"
import { Chessboard } from "./Chessboard"
import { Chess } from "chess.js"
import WebSocketErrorPage from "./Error"

export const INIT_GAME = "init_game"
export const MOVE = "move"
export const GAME_OVER = "game_over"


export const Game = () => {
    const socket = useSocket();
const [chess ] =useState(new Chess());
const [board, setBoard] =useState(chess.board());   


    useEffect(() => {
        if (!socket) {
            return;
        }

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    console.log("game initiated");
                
                    setBoard(chess.board());
                    break;
                case MOVE:
                    console.log("move made");
                    const move =message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    break;
                case GAME_OVER:
                    console.log("game over");
                    break;
            }
        }
    }, [socket])

    if (!socket) return <div>
        <WebSocketErrorPage></WebSocketErrorPage>

    </div>
    return (
        <div >
            <div className="w-screen h-screen bg-gray-800 grid grid-cols-2 justify-center items-center  ">

                <div> 
                    <Chessboard chess={chess} setBoard={setBoard} socket={socket} board={board} />
                </div>
                <div className="ml-96">
                    <button onClick={() => {
                        socket?.send(JSON.stringify({
                            type: INIT_GAME,

                        }))
                    }} className="bg-green-500 text-white  m-0.5 rounded-sm px-5 py-1 cursor-pointer"> play</button>
                </div>

            </div>
        </div>
    )
}