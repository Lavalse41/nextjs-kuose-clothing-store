import supabase from "@/supabase";
import { SafeProduct } from "../types";

interface IParams {
  productId?: number;
}

export default async function getProductById(params: IParams) {
  try {
    const { productId } = params;

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .match({ id: productId });

    if (!productId) {
      return null;
    }

    console.log("this is product", data);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
