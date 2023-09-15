"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Add = () => {
  const router = useRouter();
  const [source, setSource] = useState<string>("");
  const [sourceUrl, setSourceUrl] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ratings, setRatings] = useState<number>();
  const [token, setToken] = useState<string>("");


  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(source, tags, description, ratings);
    const data = {
        source : source,
        sourceUrl : sourceUrl,
        tags : tags,
        description : description,
        token : token,
        ratings : ratings,
    };
      const response = await axios.post('/api/data/', data);
      console.log(response.data);
      
      if(response.status === 201) {
         console.log("Posted Data to DB");
         router.push('/');
      }
  }

  return (
    <div className="flex w-full justify-center flex-col gap-4 items-center mt-20">
      <form onSubmit={handleSubmit} className="flex w-full justify-center flex-col gap-4 items-center mt-20">
      <div className="flex w-2/3 max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Source Name"
          onChange={(e : any) => setSource(e.target.value)}
        />
      </div>
      <div className="flex w-2/3 max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Source URL"
          onChange={(e : any) => setSourceUrl(e.target.value)}
        />
      </div>
      <div className="flex w-2/3 max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Tags"
          onChange={(e : any) => setTags(e.target.value)}
        />
        </div>
        <div className="flex w-2/3 max-w-sm items-center space-x-2">

        <Input
          type="email"
          placeholder="Source Description"
          onChange={(e : any) => setDescription(e.target.value)}
        />
        </div>
        <div className="flex w-2/3 max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Access Token"
          onChange={(e : any) => setToken(e.target.value)}
        />
      </div>
        <div className="flex w-2/3 max-w-sm items-center space-x-2">

        <Input
          type="email"
          placeholder="Rating (1 - 5 )"
          onChange={(e : any) => setRatings(e.target.value)}
        />
        </div>
        <div>
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </div>
      </form>
    </div>
  );
};

export default Add;
