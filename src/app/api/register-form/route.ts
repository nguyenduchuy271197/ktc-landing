import { registerPostSchema } from "@/lib/schemas";
import { doc } from "@/lib/spreadsheet";

export async function POST(request: Request) {
  const data = await request.json();

  const registerValidator = registerPostSchema.safeParse(data);

  if (!registerValidator.success)
    return Response.json("Invalid data", {
      status: 400,
    });

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Danh sách đăng ký"];
    await sheet.addRow(registerValidator.data);
    return Response.json("OK");
  } catch (error: any) {
    console.log(error);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
