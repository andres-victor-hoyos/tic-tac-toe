import { PlayController } from "./play-controller";
import { ResumeController } from "./resume-controller";
import { SaveController } from "./save-controller";
import { StartController } from "./start-controller";

export interface ControllerVisitor {
    visitStart(startController:StartController);
    visitPlay(playController:PlayController);
    visitSave(saveController: SaveController);
    visitResume(resumeController: ResumeController);    
}