import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AdminAccount() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AccountCircleIcon style={{ marginRight: '8px' }} /> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminAccount;
