import React, { ReactNode, Dispatch, createContext, useState } from "react";

interface ISidebarContext {
  isOpen: boolean;
  toggleOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<Partial<ISidebarContext>>({});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleOpen }}>{children}</SidebarContext.Provider>
  );
};
