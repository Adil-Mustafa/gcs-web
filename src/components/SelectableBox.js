import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SelectableBox({ text, selected, onSelect , minWidth }) {
  const handleBoxClick = () => {
    onSelect(text);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row', // Adjusted to row layout
        alignItems: 'center', // Align icon and text vertically
        cursor: 'pointer',
        ...(minWidth && {minWidth:"100px"}),
        backgroundColor: selected ? '#e0f2f1' : 'transparent',
      }}
      onClick={handleBoxClick}
    >
      {selected && <CheckCircleIcon color="primary" fontSize="small" />}
      <Typography variant="body1" sx={{ marginLeft: selected ? '8px' : 0 }}>
        {text}
      </Typography>
    </Box>
  );
}

export default SelectableBox;
