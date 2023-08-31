"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

const Hero = () => {
  const [keyword, setKeyword] = useState<string>("");
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(keyword);
    // const queryParams = new URLSearchParams({
    //   tags: keyword,
    // });
    const response = await axios.get(`/api/data/`, { params: { tags: keyword } });
    // const data = await response.json();
    console.log(response);
    
    if (response.status === 201) {
      console.log("fetched succesfully");
    }
  }
  function handleChange(e: any) {
    setKeyword(e.target.value);
  }
  return (
    <div className="flex w-full justify-center items-center mt-20">
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
    </div>
  );
};

export default Hero;
