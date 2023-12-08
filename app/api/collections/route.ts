import supabase from "../../../supabase";

interface IParams {
  type?: string;
  color?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { type, color } = params;

    // console.log("Received request with params:", type, color);

    let query: any = {};

    if (type) {
      query.type = type;
    }

    if (color) {
      query.color = color;
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .match(query);

    if (error) {
      throw new Error(error.message);
    }

    return Response.json(data);
  } catch (error: any) {
    throw new Error(error);
  }
}
