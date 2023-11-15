import supabase from "../../../supabase";

export async function GET(req: Request, res: Response) {
  try {
    const { data: product_types, error } = await supabase
      .from("product_types")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    return new Response(JSON.stringify(product_types));
  } catch (error) {
    return new Response(`Error fetching data: ${error.message}`, {
      status: 500,
    });
  }
}
