import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function createData(
  name,
  id,
  date,
  parentName,
  city,
  contact,
  grade, 
  action
) {
  return { name, id, date, parentName, city, contact, grade, action };
}

const rows = [
  createData('Samanta William', '#123456789', 'March 25,2021', 'Mana William', 'Jakarta',<><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', fontWeight: '600', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
  createData('Toany soap', '#123456789', 'March 25,2021', 'James Soap', 'Jakarta', <><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px',bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
  createData('Karen Hope', '#123456789', 'March 25,2021', 'Justin Hope', 'Jakarta', <><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
  createData('Jordan Nico', '#123456789', 'March 25,2021', 'Amanda Nico', 'Jakarta', <><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
  createData('Nadila Adja', '#123456789', 'March 25,2021', 'Jack Adja', 'Jakarta', <><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
  createData('Johnny Ahmad', '#123456789', 'March 25,2021', 'Danny Ahmad', 'Jakarta', <><CallOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem', marginRight: '8px'}}/> <MailOutlineOutlinedIcon sx={{fontSize: '20px', bgcolor: '#e0e0e0', borderRadius: '50%', padding: '8px',fontSize:'2rem'}}/></>, 'VII A', <MoreHorizIcon/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>Name</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>ID</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>Date</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>ParentName</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>City</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>Contact</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>Grade</TableCell>
            <TableCell sx={{color: '#311b92', fontWeight: '600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color: '#311b92', fontWeight: '600'}}>
                {row.name}
              </TableCell>
              <TableCell sx={{color: '#7e57c2', fontSize: '12px', fontWeight: '600'}}>{row.id}</TableCell>
              <TableCell sx={{color: '#bdbdbd', fontSize: '12px', fontWeight: '600'}}>{row.date}</TableCell>
              <TableCell sx={{ fontSize: '12px'}}>{row.parentName}</TableCell>
              <TableCell sx={{ fontSize: '12px'}}>{row.city}</TableCell>
              <TableCell sx={{ fontSize: '12px', color: '#7e57c2', bgcolor: '#fff', borderRadius: '50%', padding: '8px', fontSize: '2px'}}>{row.contact}</TableCell>
              <TableCell sx={{fontSize: '12px'}}>{row.grade}</TableCell>
              <TableCell sx={{color: '#bdbdbd', fontSize: '12px', fontWeight: '600'}}>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      <Stack sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap:'30rem', alignItems: 'center', margin:'2rem 0'}}>
    <Typography sx={{fontSize:'12px'}}>Showing 1-5 from 100 data</Typography>
    <Pagination count={3} variant="outlined" />
    </Stack>
    </TableContainer>
  );
}

