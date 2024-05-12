import React, { useState } from "react";

const LocationSearch = (props:any) => {
    const [searchWord, setSearchWord] = useState("")
    const onChangeSearchWord = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
    const onKeyDownToSearch = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            console.log(event.key)
        }
    }
  return (
    <input placeholder="hi" onChange={onChangeSearchWord} onKeyDown={onKeyDownToSearch}/>
  );
}

export default LocationSearch;