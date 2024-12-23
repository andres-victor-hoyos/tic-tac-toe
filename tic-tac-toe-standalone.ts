import { LogicImplementation } from "./controllers/implementation/logic-implementation";
import { Logic } from "./controllers/logic";
import { TicTacToe } from "./tic-tac-toe";

export class TicTacToeStandalone extends TicTacToe {
    protected createLogic(): Logic {
        return new LogicImplementation()
    }
    protected play(): void {
        new TicTacToeStandalone().play();
    }    
}