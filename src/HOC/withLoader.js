import React from 'react';

const withLoader = EnhancedComponent => props => (
  props.isLoading
    ? <div>Загрузка...</div>
    : <EnhancedComponent {...props} />
);

export default withLoader;