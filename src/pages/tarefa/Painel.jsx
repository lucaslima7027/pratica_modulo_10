import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section"
    sx={{ p: 2, border: '2px solid white' }}
    height={100}
    display="flex"
    margin={10}
    alignItems="center"
    borderRadius={5}
    justifyContent="center"
    color="white"
    fontSize={30}
    >
      Este app foi construído utilizando Material UI
    </Box>
  );
}