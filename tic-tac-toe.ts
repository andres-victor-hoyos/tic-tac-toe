import { AcceptorController } from "./controllers/acceptor-controller";
import { Logic } from "./controllers/logic";
import { View } from "./views/view";

export abstract class TicTacToe{
    private _logic: Logic;
    private _view: View;
    constructor(){
        this._logic = this.createLogic();
        this._view = new View();
    }

    protected abstract createLogic():Logic;

    protected play():void{
        let acceptorController:AcceptorController | null;
        do{
            acceptorController = this._logic.getController();
            if(acceptorController){
                this._view.interact(acceptorController);
            }
        }while(!acceptorController);
    }
}