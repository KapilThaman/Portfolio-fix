import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { border, color, display, fontWeight, padding } from '@mui/system';
export default function Header() {
    const useStyles = makeStyles((theme) => ({

       
    }));
    
    const classes = useStyles();
    const [firstname, setswitches] = useState('');
   
    const heading = async (e) => {
        setswitches(true);
        const heading = {
            firstname,
        }
    }
   
    
  return (
    
   <div>
       
   </div>
    
    )
}

