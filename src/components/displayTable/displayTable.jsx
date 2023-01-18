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
  createData('Samanta William', '#123456789', 'March 25,2021', 'Mana William', 'Jakarta',<><CallOutlinedIcon/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
  createData('Toany soap', '#123456789', 'March 25,2021', 'James Soap', 'Jakarta', <><CallOutlinedIcon/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
  createData('Karen Hope', '#123456789', 'March 25,2021', 'Justin Hope', 'Jakarta', <><CallOutlinedIcon/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
  createData('Jordan Nico', '#123456789', 'March 25,2021', 'Amanda Nico', 'Jakarta', <><CallOutlinedIcon/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
  createData('Nadila Adja', '#123456789', 'March 25,2021', 'Jack Adja', 'Jakarta', <><CallOutlinedIcon/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
  createData('Johnny Ahmad', '#123456789', 'March 25,2021', 'Danny Ahmad', 'Jakarta', <><CallOutlinedIcon color='#ff0000'/> <MailOutlineOutlinedIcon/></>, 'VII A', <MoreHorizIcon/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>ParentName</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.parentName}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

