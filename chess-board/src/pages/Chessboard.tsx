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
    const [to, setto] = useState<null | Square>(null);
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
                                        to
                                    }
                                );

                            }
                        }} key={j} className={` w-15 h-15 ${(i + j) % 2 === 0 ? "bg-green-500" : "bg-green-300"}`}>
                            <div className="justify-center items-center flex">

                            {square ? <img className="w-4" src={`/images/${square?.color === "b" ? square?.type : (typeof square?.type === 'string' ? `${square?.type?.toUpperCase()} copy` : '')}.png`} /> : null}

                            </div>
                        </div>
                    })}

                </div>
            }

            )}
        </div>
    )
}