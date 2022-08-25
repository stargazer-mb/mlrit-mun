import React from 'react';
import AgendaAndEB from './agenda&EB';
import CommitteeLanding from './landing';

export default function Committee(props) {
  return (
    <div style={{ marginTop: '-3rem' }}>
      <CommitteeLanding {...props} />
      <AgendaAndEB {...props} />
    </div>
  );
}
