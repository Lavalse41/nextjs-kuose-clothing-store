import supabase from "../../../supabase";

export async function GET(req: Request, res: Response) {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    return new Response(JSON.stringify(products));
  } catch (error) {
    return new Response(`Error fetching data: ${error.message}`, {
      status: 500,
    });
  }
}
