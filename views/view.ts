import { AcceptorController } from "../controllers/acceptor-controller";
import { ControllerVisitor } from "../controllers/controller-visitor";
import { PlayController } from "../controllers/play-controller";
import { ResumeController } from "../controllers/resume-controller";
import { SaveController } from "../controllers/save-controller";
import { StartController } from "../controllers/start-controller";
import { PlayView } from "./play-view";
import { ResumeView } from "./resume-view";
import { SaveView } from "./save-view";
import { StartView } from "./start-view";

export class View implements ControllerVisitor{
  private _startView: StartView;
  private _playView: PlayView;
  private _saveView: SaveView;
  private _resumeView: ResumeView;

  constructor(){
    this._startView = new StartView();
    this._playView = new PlayView();
    this._saveView = new SaveView();
    this._resumeView = new ResumeView();
  }


  interact(acceptor: AcceptorController) {
    acceptor.accept(this);
  }

  visitStart(startController: StartController) {
    this._startView.interact(startController);
  }

  visitPlay(playController: PlayController){
    this._playView.interact(playController);
  }

  visitSave(saveController: SaveController) {
    this._saveView.interact(saveController);
  }

  visitResume(resumeController: ResumeController){
    this._resumeView.interact(resumeController);
  }  
}
