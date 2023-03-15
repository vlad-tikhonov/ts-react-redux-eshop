import ReactDOM from "react-dom";
import { ReactNode } from "react";

const portal = document.getElementById("portal") as HTMLElement;

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, portal);
};
