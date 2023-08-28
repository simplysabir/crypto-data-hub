import { connectToDB } from '../../../utils/database';
import Data from '../../../model/data';

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