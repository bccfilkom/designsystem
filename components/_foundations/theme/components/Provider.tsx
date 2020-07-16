import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

const Provider: React.FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

Provider.displayName = 'Provider';

/**
 * @deprecated This has been replaced by `Provider`.
 */
export const ContentProvider: React.FC = ({ children }) => {

    return (
    <Provider>
      <GlobalStyles />
      {children}
    </Provider>
  );
};

export default Provider;