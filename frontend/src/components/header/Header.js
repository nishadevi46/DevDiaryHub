import {AppBar,Toolbar, styled} from '@mui/material'
import {Link} from 'react-router-dom'
const Component =styled(AppBar)`
color: #EEEEEE;
background:#001524;
`
const Container = styled(Toolbar)`
justify-content:center;

& > a{
    padding:20px;
    font-size:18px;
    color:#EEEEEE;
    text-decoration:none;
    font-weight:bold;}
`
const Header = ()=>{
    return(
       <Component>
        <Container>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/login'>LOG OUT</Link>
        </Container>
       </Component>
    )
}
export default Header;