import React, { createContext, useEffect, useState } from 'react'
import {ethers} from "ethers";

export const BlockchainContext = createContext();

const {ethereum} = window;


export const BlockchainContextProvider = ({children})=>{
    return(<BlockchainContext.Provider value={{wallet}}>
        {children}
    </BlockchainContext.Provider>)
}