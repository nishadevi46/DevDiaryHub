import {useState, useEffect, useContext} from 'react';
import {Box, styled, FormControl, InputBase,Button,TextareaAutosize} from '@mui/material'
import DataProvider, {DataContext} from '../../context/DataProvider'
import backgroundImage from '../../../src/images/4.jpg'
import {AddCircle as Add }from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import {API} from '../../service/api';
const Image =styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
})
const Container = styled(Box)(({ theme})=>({
  margin:'50px 100px',
  [theme.breakpoints.down('md')]:{
      margin:0
  }
}))

const Styledformcontrol=styled(FormControl)`
margin-top:10px;
display:flex;
flex-direction:row;
color:#E5D1FA;
`
const Inputstyle = styled(InputBase)`
flex:1;
margin:0 30px;
font-size:25px;
color:#DFCCFB;
`
const Textarea= styled(TextareaAutosize)`
width:100%;
margin-top:50px;
font-size:18px;
color:#27005D;
border:none;
&:focus-visible{
    outline:none;
};
`
const intialPost ={
  title:'',
  description:'',
  picture:'',
  username:'',
  categories:'',
  createdDate:new Date()
}


const Createpost = ()=>{
    const [post,setPost]= useState(intialPost)
    const [file,setFile]=useState('')
    const {account} = useContext(DataContext)
    const location = useLocation()
    const navigate = useNavigate()
    const url=post.picture ? post.picture:`${backgroundImage}`;
    const handleChange = (e)=>{
       setPost({...post,[e.target.name]:e.target.value})
    }
    useEffect(
        ()=>{
          const getimage= async ()=>{
            if(file){
                const data= new FormData()
                data.append("name",file.name)
                data.append("file",file)
               const response= await API.uploadFile(data);
                post.picture=response.data;
            }
          }
          getimage()
          post.categories=location.search?.split('=')[1] ||'All'
          post.username=account.username;
        },
        [file]
    )
    const savePost=async()=>{
      let response = await API.createPost(post);
      if(response.isSuccess){
        navigate('/')
      }
    }
    return(
        <Container>
   <Image  src={url} alt="banner" srcset=""   />
   <Styledformcontrol>
    <label htmlFor="fileInput"><Add fontSize='large' color='action' style={{color:'#C4B0FF'}}/></label>
    <input type="file" id="fileInput" style={{display:'none'}}
        onChange={(e)=>setFile(e.target.files[0])}
    />
    <Inputstyle placeholder='Title' onChange={(e)=>handleChange(e)} name='title'/>
    <Button variant='contained' style={{backgroundColor:'#645CBB'}}  onClick={()=>savePost()}>Publish</Button>
    
   </Styledformcontrol>
   <Textarea  minRows={5} placeholder='Tell your story...'
        onChange={(e)=>handleChange(e)} name='description'
    />
        </Container>
    )
}
export default Createpost; 