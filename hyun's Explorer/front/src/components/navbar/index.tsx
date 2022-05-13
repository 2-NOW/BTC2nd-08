import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import NavMenu from './NavMenu';

const wrapper = {
  position: 'sticky',
  top: '0',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(30px)',

  zIndex: '10',

  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  width: '100vw',
  height: '4.8rem',
};

const leftItemsCss = {
  m: '1.5rem 0 1.2rem 4rem',
  display: 'flex',
  justifyContent: 'space-between',
};

const rightItemsCss = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.4rem 6rem auto',
  width: '15vw',
  minWidth: '10vw',
};

function Navbar() {
  return (
    <Box sx={wrapper}>
      <Box sx={leftItemsCss}></Box>
      <Box sx={rightItemsCss}>
        <NavMenu text="Blocks" />
        <NavMenu text="Transactions" />
      </Box>
    </Box>
  );
}

export default Navbar;
