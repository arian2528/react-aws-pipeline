import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Container, Link } from '@mui/material';
import { UploadModal } from './components/UploadModal';

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: '2%',
  gap: '10px',
});

function App() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <div className="App">
      <Wrapper>
        <Container maxWidth="sm">
          <Link component="button" onClick={() => setOpenModal(true)}>Upload Import</Link>
        </Container>    
      </Wrapper>
      <UploadModal  open={openModal} handleClose={handleClose} />
    </div>
  );
}

export default App;
