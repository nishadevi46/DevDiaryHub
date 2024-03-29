import { useState, useEffect, useContext} from 'react'
import {Box,Typography, styled} from '@mui/material'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {API} from '../../service/api'
import {Edit, Delete} from '@mui/icons-material'
import {DataContext} from '../../context/DataProvider'
import Comments from './comments/Comments'
const Container = styled(Box)(({ theme})=>({
    margin:'50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
  
}))


const Image = styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
})

const Heading = styled(Typography)
`
color:#BEADFA;
font-size:38px;
font-weight:600;
text-align:center;
margin:50px 0 10px 0;
word-break:break-word;
`
const EditIcon = styled(Edit)
`
margin:5px;
padding:5px;
border: 1px solid #878787;
border-radius:10px;`

const DeleteIcon = styled(Delete)
`
margin:5px;
padding:5px;
border: 1px solid #878787;
border-radius:10px;
`

const Author = styled(Box)
`
color:#713ABE;
margin:20px 0;
display:flex;

`
const Description = styled(Typography)
`
color:#F1EAFF;
word-break:break-word;
`
const DetailView =()=>{
    const [post,setPost] = useState({});
    const navigate = useNavigate()
    const url= post.picture ? post.picture : 'https://images.unsplash.com/photo-1606589367364-8cf4f74bae83?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const { id } = useParams();
    const { account } = useContext(DataContext)
    useEffect(()=>{
       const fetchData = async()=>{
          let response = await API.getPostById(id);
          if(response.isSuccess){
            setPost(response.data)
          }
       }
       fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    const deleteBlog=async()=>{
        let response = await API.deletePost(post._id);
        if(response.isSuccess){
            navigate('/')
        }
    }
    return(
        <Container>
            <Image src={url} alt="" srcset="" />
            <Box style={{float:'right'}}>
            {
                account.username === post.username && <>
                <Link to={`/update/${post._id}`}><EditIcon color='primary'/></Link>
                <DeleteIcon onClick={() => deleteBlog()} color="error" />
                </>
            }
            console.log(post.username)
            </Box>
            <Heading>{post.title}</Heading>
            <Author>
                <Typography>Author: <Box component="span" style={{fontweight:600}}>{post.username}</Box></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>
            <Description>{post.description}</Description>
            <Comments post={post}/>
        </Container>
    )
}
export default DetailView