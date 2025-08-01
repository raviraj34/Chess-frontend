import type { Color, PieceSymbol, Square } from "chess.js"
import { useState } from "react"
import { MOVE } from "./Game"


export const Chessboard = ({ board, chess, socket, setBoard }: {
    chess: any
    setBoard: any
    socket: WebSocket
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]
}) => {

    const [from, setfrom] = useState<null | Square>(null);

    return (
        <div className="ml-30">
            {board.map((row, i) => {
                return <div key={i} className="flex">
                    {row.map((square, j) => {
                        const squareRepetation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square
                        return <div onClick={() => {
                        

                            if (!from) {
                                setfrom(squareRepetation);
                            } else {
                                socket.send(JSON.stringify({
                                    type: MOVE,
                                    payload: {
                                        move: {
                                            from,
                                            to: squareRepetation
                                        }
                                    }
                                }))
                                setfrom(null);
                                chess.move(
                                    {
                                        from,
                                        to: squareRepetation
                                    }
                                );
                                setBoard(chess.board());
                                console.log(
                                    {
                                        from,
                                        to: squareRepetation
                                    }
                                );

                            }
                        }} key={j} className={` w-15 h-15 ${(i + j) % 2 === 0 ? "bg-green-500" : "bg-green-300"}`}>
                            <div className="justify-center items-center flex">

                            {square ? <img className=" justify-center items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900 " src={`/public/${square?.color === "b" ? square?.type : (typeof square?.type === 'string' ? `${square?.type?.toUpperCase()} copy` : '')}.png`} /> : null}

                        
                            </div>
                        </div>
                    })}

                </div>
            }

            )}
        </div>
    )
}