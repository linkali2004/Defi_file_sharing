import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { useContext, useState } from 'react';
import "../App.css";
import { BlockchainContext } from '../context/Blockchain';
export default function EthCard({address}) {

     return (
<>
<Card sx={{ minWidth: "315px" ,maxHeight:"175px" , borderRadius:"10px" }} className="eth-card">
        <CardHeader avatar={ <img src="/ethereum.png" style={{width:"25px" , height:"25px"}}></img>}  action={
          <IconButton>
            <InfoIcon color="white"></InfoIcon>
          </IconButton>
        }>
        </CardHeader>
      <CardContent>
        <Typography variant = "body1" color="white">{address.substring(0,5) + "..." + address.substring(38,42)}</Typography>
      </CardContent>
      <CardActions>
       <Typography variant ="body1" color="wheat" sx={{fontWeight:550}}>Ethereum</Typography>
      </CardActions>
    </Card>
</>
  )
}
