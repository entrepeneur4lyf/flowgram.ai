import { createContext, useContext } from 'react';

import { Scope } from '../scope';

interface ScopeContextProps {
  scope: Scope;
}

const ScopeContext = createContext<ScopeContextProps>(null!);

export const ScopeProvider = ScopeContext.Provider;
export const useScopeContext = (): ScopeContextProps | null => useContext(ScopeContext);
export const useCurrentScope = () => useContext(ScopeContext)?.scope;
