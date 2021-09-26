import React from 'react';
import { createTheme,ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const darkTheme =createTheme({
    palette:{
        type : "dark",
    },
})

const CustomPagination =({setPage,numOfPages=10})=>{
     const handlePageChange=(page)=>{
         setPage(page);
         window.scroll(0,0);
     };

     
    
   
     return(
             <div
             style={{
                 width : "100%",
                 display:"flex",
                 justifyContent : "center",
                 marginTop : 20,
                 
             }} >
                 <ThemeProvider theme={darkTheme}>
                 <Pagination  color="secondary" variant="outlined"  shape="rounded" count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)} />
                 </ThemeProvider>
             </div>
     )

}

export default CustomPagination