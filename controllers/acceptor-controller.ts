import { View } from "../views/view";
import { Controller } from "./controller";
import { ControllerVisitor } from "./controller-visitor";

export abstract class AcceptorController extends Controller {
  abstract accept(controllerVisitor: ControllerVisitor);
}
