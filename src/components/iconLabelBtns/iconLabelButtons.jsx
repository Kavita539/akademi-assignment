import * as React from 'react';
import Button from '@mui/material/Button';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" endIcon={<ExpandMoreOutlinedIcon sx={{fontWeight: '900'}}/>} sx={{borderRadius: '150px', padding:'8px 15px', border:'2px solid #311b92', color: '#311b92'}}>
        Newest
      </Button>
      <Button variant="contained" startIcon={<AddOutlinedIcon />} sx={{borderRadius: '150px', padding:'8px 15px', bgcolor: '#311b92', color: '#fff'}}>
        New Student
      </Button>
    </Stack>
  );
}