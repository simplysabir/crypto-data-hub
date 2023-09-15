"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import axios from "axios";
import Link from "next/link";

type searchDataType = {
  _id: string;
  source: string;
  link : string;
  tags: [string];
  description: string;
  ratings: number;
};
const avaialableTags = ['DAO & Governance', 'NFT', 'DeFi', 'Macro', 'Metaverse', 'On-Chain', 'Other', 'dApps', 'Token', 'Fundraise', 'Airdrop', 'Chain', 'GameFi', 'Analytics'];
const Hero = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchedData, setSearchedData] = useState([]);
  async function handleSubmit(e: any) {
    e.preventDefault();
    // console.log(keyword);
    // const queryParams = new URLSearchParams({
    //   tags: keyword,
    // });
    const response = await axios.get(`/api/data/`, {
      params: { tags: keyword },
    });
    // const data = await response.json();
    const data = response.data;
    // console.log(response.data);
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
      <form onSubmit={handleSubmit}>
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
      </form>
      <div className="mt-9 w-full px-10 flex items-center justify-center">
  <div className="flex flex-wrap justify-center">
    {avaialableTags.map((tags) => (
      <span key={tags} className="bg-opacity-50 bg-gray-100 text-black-800 rounded-full px-4 py-2 m-1 text-xs">{tags}</span>
    ))}
  </div>
</div>


      <div className="mt-5">
        <div>
          {searchedData.length === 0 ? (
            <p>Nothing to show</p>
          ) : (
            searchedData.map((data: searchDataType) => (
              <div className="mt-4 mb-4 w-80" key={data._id}>
                <Alert>
                <Link href={data.link} target="_blank">
                  <AlertTitle className="font-bold">{data.source}</AlertTitle>
                  </Link>
                  <AlertDescription>{data.description}</AlertDescription>

                  <div className="w-full flex justify-between gap-7">
                    <AlertTitle>rating : {data.ratings} / 5</AlertTitle>
                    <AlertTitle>tags : {data.tags}</AlertTitle>
                  </div>
                </Alert>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
