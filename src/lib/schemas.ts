import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const nameRegex = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
);

export const registerFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Họ và tên phải chứa ít nhất 2 chữ cái!" })
    .regex(nameRegex, "Tên không được phép ghi số!"),
  email: z
    .string()
    .min(2, { message: "Địa chỉ email không hợp lệ!" })
    .email("Phải là địa chỉ email có thật!"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có 10 chữ số!")
    .max(10, "Số điện thoại chỉ có 10 chữ số!")
    .regex(phoneRegex, "Số điện thoại chỉ có số!"),
  message: z.string().optional(),
});
