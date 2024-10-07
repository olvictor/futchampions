import React, { createContext, useState } from 'react'
import * as XLSX from 'xlsx';


export const DadosContext = createContext();

    
export const DadosStorage = ({children}) => {
    const [dados,setDados] = useState(null)

    useState(()=>{
        async  function  teste(){
          const response = await fetch('/CONTROLE_WL.xlsx');
          const arrayBuffer = await response.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
    
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 2 });
    
          setDados(jsonData)
        }
        teste()
      },[])
      console.log(dados)
  return (
    <DadosContext.Provider value={{dados,setDados}}>
        {children}
    </DadosContext.Provider>
  )
}

