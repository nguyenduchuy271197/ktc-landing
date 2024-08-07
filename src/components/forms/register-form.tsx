"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

// import { doc } from "@/lib/spreadsheet";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  registerFormSchema,
  RegisterPostData,
  STATUS_OPTIONS,
} from "@/lib/schemas";
import CVDropzone from "../cv-dropzone";
import { useUploadThing } from "@/utils/uploadthing";
import FormFieldInput from "./form-fields/form-field-input";
import { useRouter } from "next/navigation";
import FormItemWrapper from "./form-fields/form-item-wrapper";
import Link from "next/link";

type IRegisterForm = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const { startUpload, isUploading } = useUploadThing("pdfUploader", {
    // onClientUploadComplete: () => {
    //   alert("uploaded successfully!");
    // },
    onUploadError: () => {
      // Toast error
      alert("error occurred while uploading");
    },
  });
  const form = useForm<IRegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience_years: 0,
      major: "",
      agree: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterPostData) =>
      axios.post("/api/register-form", data),
    onSuccess: () => {
      router.push("/cam-on");
    },
  });

  async function onSubmit(values: IRegisterForm) {
    const { cv_file, ...restData } = values;
    const selectedFiles = new Array(cv_file);
    const result = await startUpload(selectedFiles);
    if (result) {
      const data = { ...restData, cv_url: result[0].url };
      mutate(data);
    }
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldInput
          name="name"
          label="Họ và tên"
          placeholder="Nguyễn Văn A"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        <FormFieldInput
          name="phone"
          label="Số điện thoại"
          placeholder="0xxxxxxxxx"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        <FormFieldInput
          name="email"
          label="Email"
          placeholder="abc@gmail.com"
          isSubmitting={isSubmitting}
          form={form}
          required
        />
        {/* <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItemWrapper label="Vị trí hiện tại" required>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value?.toString()}
                className="flex flex-col space-y-1"
                disabled={isSubmitting}
              >
                {STATUS_OPTIONS.map((status) => (
                  <FormItem
                    key={status.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={status.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {status.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItemWrapper>
          )}
        /> */}
        <FormFieldInput
          name="experience_years"
          label="Số năm kinh nghiệm"
          placeholder="0"
          type="number"
          isSubmitting={isSubmitting}
          form={form}
          required
          // onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
        />

        <FormFieldInput
          name="major"
          label="Vị trí hiện tại"
          placeholder="Công nghệ thông tin"
          isSubmitting={isSubmitting}
          form={form}
          required
        />

        <FormField
          control={form.control}
          name="cv_file"
          render={({ field }) => (
            <FormItemWrapper label="Tải lên CV (Định dạng PDF)" required>
              <CVDropzone
                disabled={isSubmitting}
                onChange={(files) => {
                  field.onChange(files[0]);
                }}
              />
            </FormItemWrapper>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                    }}
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  Tôi đã đọc và đồng ý với{" "}
                  <Link
                    href="/chinh-sach-bao-mat"
                    className="font-bold text-pink-600"
                    target="_blank"
                  >
                    Chính sách bảo mật{" "}
                  </Link>
                  của chương trình
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-pink-600"
          disabled={isSubmitting}
        >
          {isUploading
            ? "Vui lòng đợi trong giây lát.. "
            : isPending
            ? "Dữ liệu đang được xử lí..."
            : "Đăng ký ngay"}
        </Button>
      </form>
    </Form>
  );
}
