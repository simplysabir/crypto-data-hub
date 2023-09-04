import { connectToDB } from '../../../utils/database';
import Data from '../../../model/data';
import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req : Request, res : Response) => {
    const body = await req.json();
    const { source, tags, description, ratings } = body;
    try {
      await connectToDB();
      
      const newData = await Data.create({
        source : source,
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
export const GET = async (req : NextApiRequest, res : NextApiResponse) => {
    console.log(req.url);
    const url = req.url;
    const mainUrl : URL = new URL(url);
    const searchParams = mainUrl.searchParams;
    const tags = searchParams.get("tags");
    console.log("tags from api ",tags);
    try {
      await connectToDB();
      
      const fetchedData = await Data.find({ tags : tags });
      console.log("It's the fetched data ",fetchedData);
      
      
  
      return new Response(JSON.stringify(fetchedData), { status: 201 });
    } catch (error) {
      return new Response("Failed to Fetch Data From Database", { status: 500 });
    }
};