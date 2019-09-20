import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

// There is an aditional way to right HOC but this one is ok too
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
