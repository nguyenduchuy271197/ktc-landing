import { registerFormSchema } from "@/lib/schemas";
import { doc } from "@/lib/spreadsheet";

export async function POST(request: Request, response: Response) {
  const data = await request.json();

  const registerValidator = registerFormSchema.safeParse(data);

  if (!registerValidator.success)
    return Response.json("Invalid data", {
      status: 400,
    });

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Người đăng ký tư vấn"];
    await sheet.addRow(registerValidator.data);
    return Response.json("OK");
  } catch (error: any) {
    console.log(error.message);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
