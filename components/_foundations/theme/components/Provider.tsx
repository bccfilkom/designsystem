import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

interface ProviderProps {
  children?:React.ReactNode;
}

interface ContentProviderProps {
  children?:React.ReactNode;
}

const Provider= ({ children }:ProviderProps) => {
  return <Theme>{children}</Theme>;
};

Provider.displayName = 'Provider';

/**
 * @deprecated This has been replaced by `Provider`.
 */
export const ContentProvider = ({ children }:ContentProviderProps) => {

    return (
    <Provider>
      <GlobalStyles />
      {children}
    </Provider>
  );
};

export default Provider;