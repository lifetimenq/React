import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) { 
    return (
      props.isLoading
      ? <div>Загрузка...</div>
      : <EnhancedComponent {...props} />
    )
});

export default withLoader;