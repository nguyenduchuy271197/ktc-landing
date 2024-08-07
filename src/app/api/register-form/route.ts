import { registerPostSchema } from "@/lib/schemas";
import { doc } from "@/lib/spreadsheet";

export async function POST(request: Request) {
  const data = await request.json();

  const registerValidator = registerPostSchema.safeParse(data);

  if (!registerValidator.success)
    return Response.json("Invalid data", {
      status: 400,
    });

  console.log(registerValidator.data);

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[0];
    await sheet.addRow(registerValidator.data);
    return Response.json("OK");
  } catch (error: any) {
    console.log(error.message);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
