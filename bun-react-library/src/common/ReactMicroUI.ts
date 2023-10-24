import { ReactNode } from "react";
import { unmountComponentAtNode } from"react-dom";
import { createRoot } from "react-dom/client";
import MicroUI from "./MicroUI";

class ReactMicroUI implements MicroUI {
  private _elem: HTMLElement;
  private _reactNode: ReactNode;
  
  constructor(component: ReactNode) {
    this._reactNode = component;
  }

  init(componentId: string){
    let domNode = document.getElementById(componentId);
  
    if (!domNode) {
      domNode = document.createElement('div');
      domNode.setAttribute('id', componentId);
    }

    this._elem = domNode;
  };

  mount() {
    const root = createRoot(this._elem);
    root.render(this._reactNode);
  }

  unmount(){
    unmountComponentAtNode(this._elem);
  };
}

export default ReactMicroUI;
