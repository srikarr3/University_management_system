import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box} from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <StyledImage src={Students} alt="students" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to <br />
                            University Management System
                        </StyledTitle>
                        <StyledText>
                            Streamline university management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            {/* <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth color="primary">
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister">
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledPaper = styled.div`
    padding: 40px;
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525;
    font-weight: bold;
    padding-top: 0;
`;

const StyledText = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
