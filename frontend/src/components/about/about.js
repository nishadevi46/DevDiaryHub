
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import backgroundImage from '../../images/7.jpg'
const Banner = styled(Box)`
    background-image:url(${backgroundImage});
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
   
`;
const Ap = styled(Box)`
text-align:center;
display:flex;
justify-content:center;
`
const Text = styled(Typography)`
    color: #F1EAFF;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Text variant="h5">Hey there! I'm a 3rd-year electrical engineering student & I work with MERN technology, which is all about building cool web applications using MongoDB, Express.js, React, and Node.js  
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/nishadevi46" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                   <span> I adore exploring new places solo. Whether it's deep tech talks or jamming out to music, count me in for both! And, of course, I'm always up for a good photoshoot. Life's all about balancing the circuits, both in code and in pictures!  <Ap>🌍💻🎶📸</Ap></span>
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;