import { categories } from '../../constants/data';
import {Button, Table,TableBody, TableCell, TableHead, TableRow,styled} from '@mui/material'
import {Link, useSearchParams} from 'react-router-dom'
const Styledtable = styled(Table)`
  border:solid rgba(224,224,224,1);
  background:#03001C;
  color:#fff;
`
const Stylebutton = styled(Button)`
margin:20px;
width:85%;
background:#73777B;
color:#fff;
`
const Styledlink=styled(Link)`
text-decoration:none;
color:inherit;
`
const Category = ()=>{
    const [searchParams]=useSearchParams();
     const category=searchParams.get('category')
    return(
  <>
  <Styledlink to={`/create?category=${category||''}`} >
    <Stylebutton variant='contained'>Create Blog</Stylebutton>
    </Styledlink>
    <Styledtable>
        <TableHead>
            <TableRow>
                <TableCell  style={{ color:'#fff'}}>
                    <Styledlink to='/'>
                    All Categories
                    </Styledlink>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {categories.map(category => (
            <TableRow key={category.id}>
                <TableCell  style={{ color:'#EEF5FF'}}>  
                <Styledlink to={`/?category=${category.type}`} >{category.type}</Styledlink>
                </TableCell>
            </TableRow>
        ))}

        </TableBody>
    </Styledtable>
  </>
    )
}
export default Category;