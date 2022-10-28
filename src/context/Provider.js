import React, { useState, useMemo } from 'react';
import context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [emailContext, setEmailContext] = useState('');

  const contextValue = useMemo(() => ({
    emailContext,
    setEmailContext,
    }), [ emailContext, setEmailContext ]
  )

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
