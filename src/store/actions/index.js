import constants from "../constants";
const { INIT_GAME, MOVE, MOVES } = constants;

export const initGame = (isNew) => ({ type: INIT_GAME, payload: isNew });

export const moveUp = () => ({ type: MOVE, payload: MOVES.up });

export const moveDown = () => ({ type: MOVE, payload: MOVES.down });

export const moveLeft = () => ({ type: MOVE, payload: MOVES.left });

export const moveRight = () => ({ type: MOVE, payload: MOVES.right });
