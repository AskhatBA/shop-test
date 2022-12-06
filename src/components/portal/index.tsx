import { FC, ReactElement } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactElement | ReactElement[];
  wrapperId: string;
};

const Portal: FC<PortalProps> = ({ children, wrapperId }): ReactElement => {
  let wrapper = document.getElementById(wrapperId);

  const createWrapperAndAppendToBody = (id: string) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", id);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  };

  if (!wrapper) wrapper = createWrapperAndAppendToBody(wrapperId);

  return createPortal(children, wrapper);
};

Portal.defaultProps = {
  wrapperId: "",
};

export default Portal;
