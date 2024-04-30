import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = 'srm';

  const { status, currentUser, currentRole } = useSelector((state) => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const navigateHandler = (user) => {
    if (user === 'Admin') {
      if (visitor === 'guest') {
        const email = 'srmuniv@gmail.com';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === 'Student') {
      if (visitor === 'guest') {
        const rollNum = '1';
        const studentName = 'srikar';
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === 'Teacher') {
      if (visitor === 'guest') {
        const email = 'teacher@gmail.com';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage('Network Error');
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Typography variant="h3" gutterBottom style={{ marginBottom: '2rem', color: '#fff' }}>
        University Management System
      </Typography>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard onClick={() => navigateHandler('Admin')}>
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>
                  Admin
                </StyledTypography>
                Login as an administrator to access the dashboard to manage app data.
              </StyledPaper>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard onClick={() => navigateHandler('Student')}>
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>
                  Student
                </StyledTypography>
                Login as a student to explore course materials and assignments.
              </StyledPaper>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard onClick={() => navigateHandler('Teacher')}>
              <StyledPaper elevation={3} bgColor="#5a6096">
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>
                  Teacher
                </StyledTypography>
                Login as a teacher to create courses, assignments, and track student progress.
              </StyledPaper>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: #5a6096;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.bgColor || '#1f1f38'};
  color: #fff;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #96905a;
    color: #fff;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
