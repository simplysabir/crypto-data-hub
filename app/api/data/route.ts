import { connectToDB } from '../../../utils/database';
import Data from '../../../model/data';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export const POST = async (req : Request, res : Response) => {
    const body = await req.json();
    let { source, sourceUrl, tags, description, ratings, token } = body;
    if(token !== "0xe538c2ac14FcFbf90D6faAd058BE3994A9AfaEB9") {
      return new Response(JSON.stringify("You don't have access to add Data"), { status: 500 });
    }
    if (typeof tags === 'string') {
      tags = tags.toLowerCase(); // Convert tags to lowercase
      // Split the lowercase tags into an array using a delimiter (e.g., comma)
      tags = tags.split(',').map((tag: string) => tag.trim());
    }

    try {
      await connectToDB();
      
      const newData = await Data.create({
        source : source,
        link : sourceUrl,
        tags : tags,
        description : description,
        ratings : ratings
      });
  
      await newData.save();
  
      return new Response(JSON.stringify(newData), { status: 201 });
    } catch (error) {
      return new Response("Failed to add Data to Database", { status: 500 });
    }
};
export const GET = async (req : Request | NextRequest, res : NextApiResponse) => {
    console.log(req.url);
    const url = req.url;
    const mainUrl : URL = new URL(url);
    const searchParams = mainUrl.searchParams;
    const tags = searchParams.get("tags");
    console.log("tags from api ",tags);
    let lowercaseTags
    if (tags) {
      lowercaseTags = tags.replace(/[A-Z]/g, match => match.toLowerCase());
      console.log("Lowercase tags: ", lowercaseTags);
    }    try {
      await connectToDB();
      
      const fetchedData = await Data.find({ tags : lowercaseTags });
      console.log("It's the fetched data ",fetchedData);
      
      
  
      return new Response(JSON.stringify(fetchedData), { status: 201 });
    } catch (error) {
      return new Response("Failed to Fetch Data From Database", { status: 500 });
    }
};