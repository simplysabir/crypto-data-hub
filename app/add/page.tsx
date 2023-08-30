"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Add = () => {
  const [source, setSource] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ratings, setRatings] = useState<number>();


  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(source, tags, description, ratings);
    const data = {
        source : source,
        tags : tags,
        description : description,
        ratings : ratings,
    };
      const response = await axios.post('/api/data/', data);
      console.log(response);
      
      if(response.status === 201) {
         console.log("Posted Data to DB");
         
      }
  }

  return (
    <div className="flex w-full justify-center items-center mt-20">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Source URL"
          onChange={(e : any) => setSource(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Tags"
          onChange={(e : any) => setTags(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Source Description"
          onChange={(e : any) => setDescription(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Rating (1 - 5 )"
          onChange={(e : any) => setRatings(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Add;
