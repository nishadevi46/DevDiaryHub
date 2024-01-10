import {useState, useContext} from 'react'
import{Box, TextField, Button, styled, Typography} from '@mui/material'
import Im from '../../images/200.png'
import {API} from '../../service/api'
import {DataContext} from '../../context/DataProvider'
import { useNavigate } from 'react-router-dom'
const Components = styled(Box)`
width:400px;
margin:auto;
color: #000; /* Change text color to black */
  background: #D2E0FB; /* Change background B4D4FF B4D4FFcolor to black */
box-shadow:5px 2px 5px 2px rgb(0,0,0,0.6);
`
const Error =styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`
const Image = styled('img')({
    width: '100%', // Use 100% width to ensure the image fills its container
    height: 'auto', // Maintain the aspect ratio
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
    objectFit: 'cover',
})
const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
& > div, & > Button, & > p{
    margin-top:20px;
}

`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #38419D;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
 text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
color:878787;
font-size:16px;


`
const loginInitialValue={
    username:'',
    password:''
}
const signupIntialValue={
    name:'',
    username:'',
    password:''
}
const Login = ({isUserAuthenticated})=>{
    const imageURL = `${Im}`;
    const [account, toggleAccount] = useState('login');
    const [signup,setSignup] = useState(signupIntialValue)
    const [error,setError]=useState('')
    const {setAccount}=useContext(DataContext)
    const [login,setLogin]=useState(loginInitialValue)
    const navigate = useNavigate()
    const toggleSignup=()=>{
        account === 'login'? toggleAccount('signup'):toggleAccount('login')
    }
    const onInputChange = (e)=>{
      setSignup({...signup,[e.target.name]:e.target.value});
    }
    const signupUser =async()=>{
       let response= await API.userSignup(signup)
       if(response.isSuccess){
        setError('')
        setSignup(signupIntialValue)
        toggleAccount('login')
       }
       else{
      setError('something went wrong! plz try later')
       }
    }
    const onValueChange=(e)=>{
         setLogin({...login,[e.target.name]:e.target.value});
    }
    const loginUser= async()=>{
       let response= await API.userLogin(login)
       if(response.isSuccess){
           setError('')
           sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
           sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
           setAccount({username:response.data.username,name:response.data.name})
           isUserAuthenticated(true)
           navigate('/')
       }
       else{
        setError('something went wrong! plz try later')
       }
    }
return(
    <Components >
    <Box>
    <Image src={imageURL} alt="Login" srcset="" />
    {account === 'login' ?
    <Wrapper>
    <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name='username' label="Enter username"/>
    <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name='password' label="Enter password"/>
    {error && <Error>{error}</Error>}
    <LoginButton variant="contained" onClick={()=>loginUser()}>Login </LoginButton>
   <Text style={{ textAlign: 'center' }}>OR</Text>
    <SignupButton onClick={()=>{toggleSignup()}}>Create an account</SignupButton>
    </Wrapper>
    :
    <Wrapper>
    <TextField variant="standard"    onChange={(e)=>onInputChange(e)} name='name' label="Enter name"/>
    <TextField variant="standard"    onChange={(e)=>onInputChange(e)}
    name='username'label="Enter username"/>
    <TextField variant="standard"    onChange={(e)=>onInputChange(e)} name='password'label="Enter password"/>

    {error && <Error>{error}</Error>}
    <SignupButton onClick={()=>signupUser()}>SignUp </SignupButton>
   <Text style={{ textAlign: 'center' }}>OR</Text>
    <LoginButton variant="contained" onClick={()=>{toggleSignup()}}>Already have an account</LoginButton>
    </Wrapper>
    }
    </Box>
    </Components>
)
}
export default Login