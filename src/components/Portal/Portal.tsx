import ReactDOM from "react-dom";
import { ReactNode } from "react";

const portal = document.getElementById("portal") as HTMLElement;

interface PortalProps {
  children: ReactNode;
  to?: HTMLElement;
}

export const Portal = ({ to = portal, children }: PortalProps) => {
  return ReactDOM.createPortal(children, to);
};
