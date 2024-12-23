import { Session } from "../models/session";
import { StateValue } from "../types/state-value";
import { AcceptorController } from "./acceptor-controller";

export abstract class Logic {
  protected _session: Session;
  
  protected _acceptorControllers: Map<StateValue, AcceptorController>;

  constructor() {
    this._acceptorControllers = new Map<StateValue, AcceptorController>();
  }

  public getController(): AcceptorController | null {
    let result = this._acceptorControllers.get(this._session.getValueState());
    if(result){
        return result;
    }
    return null;
  }
}
