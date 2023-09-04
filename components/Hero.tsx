"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./ui/alert";
import axios from "axios";


type searchDataType = {
  _id : string;
  source : string;
  tags : [string];
  description : string;
  ratings : number;
}
const Hero = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchedData, setSearchedData] = useState([]);
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(keyword);
    // const queryParams = new URLSearchParams({
    //   tags: keyword,
    // });
    const response = await axios.get(`/api/data/`, { params: { tags: keyword } });
    // const data = await response.json();
    const data = response.data;
    console.log(response.data);
    setSearchedData(data);
    if (response.status === 201) {
      console.log("fetched succesfully");
    }
  }
  function handleChange(e: any) {
    setKeyword(e.target.value);
  }
  return (
    <div className="flex w-full justify-center flex-col items-center mt-20">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Search by Keywords"
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </div>

      <div className="mt-10">
        {searchedData.map((data : searchDataType) => (
          <div className="mt-4 mb-4" key={data._id}> 
          <Alert>
          <AlertTitle>{data.source}</AlertTitle>
          <AlertDescription>
            {data.description}
          </AlertDescription>
          <AlertTitle>
            rating : {data.ratings} / 5
          </AlertTitle>

          <AlertDescription>
            tags : {data.tags}
          </AlertDescription>
        </Alert>
        </div>
        ))}
            
      </div>
    </div>
  );
};

export default Hero;
