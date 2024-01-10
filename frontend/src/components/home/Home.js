import Banner from "../banner/Banner"
import Category from "./Category"
import {Grid} from '@mui/material'
import Posts from './post/Posts'
const Home=()=>{
    return(
        <>
       <Banner/>
       <Grid container style={{backgroundColor:'#040D12'}}>
       <Grid item lg={2} sm={2} xs={12}>
       <Category/>
       </Grid>
       <Grid container item xs={12} sm={10} lg={10} style={{backgroundColor:'#040D12'}}>
       <Posts/>
       </Grid>
       </Grid>
       </>
    )
}
export default Home