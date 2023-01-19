import * as React from 'react';
import Button from '@mui/material/Button';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" endIcon={<ExpandMoreOutlinedIcon />}>
        Newest
      </Button>
      <Button variant="contained" startIcon={<AddOutlinedIcon />}>
        New Student
      </Button>
    </Stack>
  );
}