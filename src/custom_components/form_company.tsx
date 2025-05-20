"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CompanyLogo from "@/assets/BAMS-est-1990-logo-black.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import LocationSelector from "@/components/ui/location-input";

const formSchema = z.object({
  ref_num: z.string().min(1),
  completed_by: z.string().min(1),
  date: z.coerce.date(),
  division: z.string().min(1),
  time: z.coerce.date(),
  client: z.string().min(1),
  company_abn: z.string().min(1),
  contact: z.string().min(1),
  phone: z.string(),
  email: z.string(),
  mobile: z.string(),
  street: z.string().min(1),
  suburb: z.string().min(1),
  postcode: z.string().min(1),
  country: z.tuple([z.string(), z.string().optional()]),
  check: z.unknown(),
  company: z.string().min(1),
  company_contact: z.string().min(1),
  company_phone: z.string(),
  company_email: z.string(),
  company_mobile: z.string(),
  company_street: z.string().min(1),
  company_suburb: z.string().min(1),
  company_postcode: z.string().min(1),
  company_country: z.tuple([z.string(), z.string().optional()]),
  payment_person: z.string().min(1),
  payment_contact: z.string().min(1),
  payment_phone: z.string(),
  department: z.string().min(1),
  position: z.string().min(1),
  payment_email: z.string(),
  payment_mobile: z.string(),
  payment_street: z.string().min(1),
  payment_suburb: z.string().min(1),
  payment_postcode: z.string().min(1),
  payment_country: z.tuple([z.string(), z.string().optional()]),
  service_instructions: z.string(),
  officer: z.string().min(1).optional(),
  officer_contact: z.string().min(1),
  officer_email: z.string(),
  officer_mobile: z.string(),
});

export default function CompanyForm() {
  const [countryName, setCountryName] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      time: new Date(),
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      form.setValue("time", new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full py-10 mx-auto py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="text-sm text-gray-700 md:col-span-2 flex flex-col justify-center">
            <p>
              <strong>Phone:</strong> +61 2 9826 0666 | <strong>Email:</strong>{" "}
              office@bams.com.au | <strong>Website:</strong> bams.com.au
            </p>
            <p className="mt-2">
              PO Box 698 Liverpool NSW 2170 <br /> <strong>ABN:</strong> 93 666
              476 375
            </p>
          </div>
          <div>
            <Image
              src={CompanyLogo}
              alt="Company Logo"
              className="w-32 md:w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Register Company</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full company name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="company_abn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ABN</FormLabel>
                  <FormControl>
                    <Input placeholder="Company ABN" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="company_phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Phone</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Project contact phone"
                      {...field}
                      defaultCountry="TR"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="company_street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input placeholder="Project Street" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="company_suburb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suburb</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Suburb"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="company_postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company postcode"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <LocationSelector
                      onCountryChange={(country) => {
                        setCountryName(country?.name || "");
                        form.setValue(field.name, [
                          country?.name || "",
                          stateName || "",
                        ]);
                      }}
                      onStateChange={(state) => {
                        setStateName(state?.name || "");
                        form.setValue(field.name, [
                          form.getValues(field.name)[0] || "",
                          state?.name || "",
                        ]);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-6">
            <Button type="button" className="w-full">
              Cancel
            </Button>
          </div>
          <div className="col-span-6">
            <Button type="submit" className="w-full">
              Register Company
            </Button>
          </div>
        </div>
        <Separator />
        <div className="space-y-4 mt-4">
          <div className="flex justify-between text-md font-semibold">
            <p className="inline">Security Master Licence 000108155</p>
            <p className="inline">Traffic Control Licence TCT1032795</p>
          </div>
        </div>
      </form>
    </Form>
  );
}
