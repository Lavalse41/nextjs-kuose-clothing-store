import supabase from "../../../../supabase";

export async function GET(req: Request, res: Response) {
  try {
    const { data: product_types, error } = await supabase
      .from("product_types")
      .select("*")
      .order("id", { ascending: true });

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

export async function PUT(req: Request, res: Response) {
  try {
    console.log(req);
    const { selected } = await req.json();
    const id = req.url.split("productTypes/")[1];
    const { data: product_types, error } = await supabase
      .from("product_types")
      .update({ selected })
      .match({ id: parseInt(id) })
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return new Response(`Updating data successfully`, {
      status: 200,
    });
  } catch (error) {
    return new Response(`Error updating data: ${error.message}`, {
      status: 500,
    });
  }
}
