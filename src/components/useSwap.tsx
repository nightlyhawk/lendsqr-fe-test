import { type } from 'os';
import { useState, useEffect } from 'react';

type ClassProps = {
    data: string
}

export const useSwap = ({data}: ClassProps) => {
const [classe, setClasse] = useState("");

function swap(){
    data.toLowerCase()
       if(data.includes("on")){
        data.replace(/on/g, "off")
        setClasse(data)
       }else {
        data.replace(/off/g, "on")
        setClasse(data)
       }
};
useEffect(() => {
    swap();
  }, [data]);
return {classe}
}