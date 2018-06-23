import React from 'react';
export default props => <pre>{JSON.stringify(props.children, null, 2)}</pre>;
