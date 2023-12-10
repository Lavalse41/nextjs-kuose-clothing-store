import supabase from "@/supabase";

export interface IParams {
  type?: string;
  color?: string;
}

export default async function getProducts(params: IParams) {
  try {
    const { type, color } = params;

    let query: any = {};

    if (type) {
      query.type = type;
    }

    if (color) {
      query.color_filter = color;
    }

    console.log(query);

    // if query is empty or has one type and no color
    if (Object.keys(query).length === 0 || (!Array.isArray(type) && !color)) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .match(query);

      return data;
    }

    //if query has only color
    if (!type && color) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .contains("color_filter", [query.color_filter]);

      return data;
    }

    //if query has one type and color
    if (!Array.isArray(type) && color) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .match({ type: type })
        .contains("color_filter", [query.color_filter]);

      return data;
    }

    //if query has many types and colors
    if (Array.isArray(type) && color) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("type", [...type])
        .contains("color_filter", [query.color_filter]);
      return data;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
