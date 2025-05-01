import { sql } from "drizzle-orm";

import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const searchString = searchParams.get("search")?.toLowerCase();

  let data;
  if (searchString) {
    const searchRegex = `%${searchString}%`;

    // I am aware the typecasting isn't the most efficient solution.  
    // I would change the specialty field from JSONb to a m:m relationship in the db (depending on the other uses for it)
    // Otherwise I think there might be a better way to query.  I'm just doing this for time constraints
    data = await db
      .select()
      .from(advocates)
      .where(
        sql`LOWER(${advocates.firstName}) LIKE ${searchRegex}
        OR LOWER(${advocates.lastName}) LIKE ${searchRegex}
        OR LOWER(${advocates.city}) LIKE ${searchRegex}
        OR LOWER(${advocates.degree}) LIKE ${searchRegex}
        OR LOWER(${advocates.specialties}::text) LIKE ${searchRegex}
        OR LOWER(${advocates.yearsOfExperience}::text) LIKE ${searchRegex}`
      )
  } else {
    data = await db.select().from(advocates);
  }

  return Response.json({ data });

}
