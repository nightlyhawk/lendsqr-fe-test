import { useAxios } from "../hooks/useAxios";
import { useState } from 'react';
import { user } from "../pages/users/Users";


export const useSlider = (data: user[] | undefined) => {
    if(data){
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex, lastIndex);
    const noPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(noPage + 1).keys()].slice(1)
    var prePage =  function prePage(){
        if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
        }
        }
       var changeCPage = function changeCPage(id: number){
           setCurrentPage(id)
        }
       var nexPage =  function nexPage(){
            if(currentPage !== noPage){
                setCurrentPage(currentPage + 1)
            }        
        }
    return {currentPage, records, noPage, numbers, nexPage, prePage, changeCPage}
}
}