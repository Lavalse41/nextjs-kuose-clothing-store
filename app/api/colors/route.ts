import supabase from "../../../supabase";

export async function GET(req: Request, res: Response) {
  try {
    const { data: product_colors, error } = await supabase
      .from("product_colors")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return new Response(JSON.stringify(product_colors));
  } catch (error) {
    return new Response(`Error fetching data: ${error.message}`, {
      status: 500,
    });
  }
}
