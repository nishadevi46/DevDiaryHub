
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

import backgroundImage from '../../images/11.jpg'
const Banner = styled(Box)`
    background-image:url(${backgroundImage});
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
   

`;

const Text = styled(Typography)`
    color: #F9E8D9;
`;


const Contact = () => {
    return (
        <Box >
            <Banner />
            <Wrapper>
                <Typography variant="h4" style={{color:'#EEF5FF'}}> Hello there! I'm thrilled that you've stopped by. Whether you have a question,feedback or  want to collaborate</Typography>    
                <Text variant="h4">
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/nisha-devi-66ba44254/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:nishadevi4628@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;