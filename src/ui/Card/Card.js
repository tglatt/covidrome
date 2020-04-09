import React from 'react';
import { Card as RebassCard } from 'rebass';

const Card = (props) => (
  <RebassCard
    sx={{
      px: 1,
      py: 1,
    }}
    {...props}
  />
);

export { Card };
