import supabase from "@/supabase";

export interface IParams {
  type?: string;
  color?: string;
}

export default async function getProducts(params: IParams) {
  try {
    const { type, color } = params;

    // console.log("Received request with params:", params);

    let query: any = {};

    if (type) {
      query.type = type;
    }

    if (color) {
      query.color_filter = color;
    }

    console.log("q:", query);

    //if query is empty, return all products
    if (Object.keys(query).length === 0 || !Array.isArray(type)) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .match(query);

      return data;
    }

    let queryResult = [];

    for (let i = 0; i < query.type.length; i++) {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .match({
          type: query.type[i],
        });

      if (error) {
        throw new Error(error.message);
      }

      queryResult.push(...data);
    }

    console.log(queryResult);

    return queryResult;
  } catch (error: any) {
    throw new Error(error);
  }
}
