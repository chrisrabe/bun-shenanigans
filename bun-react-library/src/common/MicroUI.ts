interface MicroUI {
  init: (componentId: string) => void;
  mount: () => void;
  unmount: () => void;
}

export default MicroUI;
