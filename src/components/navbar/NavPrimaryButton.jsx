'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NavPrimaryButton({ sx, children, href, ...rest }) {
  if (href) {
    return (
      <Box component={Link} href={href} sx={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="small"
          sx={sx}
          aria-label="nav-primary-btn"
          {...rest}
        >
          {children || 'Wallet'}
        </Button>
      </Box>
    );
  }

  return (
    <Button
      variant="contained"
      size="small"
      sx={sx}
      aria-label="nav-primary-btn"
      {...rest}
    >
      {children || 'Wallet'}
    </Button>
  );
}

NavPrimaryButton.propTypes = {
  sx: PropTypes.any,
  children: PropTypes.any,
  href: PropTypes.string,
};
