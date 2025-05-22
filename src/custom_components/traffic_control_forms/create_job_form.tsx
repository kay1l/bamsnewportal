"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CompanyLogo from "@/assets/BAMS-est-1990-logo-black.png";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import LocationSelector from "@/components/ui/location-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  ref_num: z.string().min(1),
  completed_by: z.string().min(1),
  date: z.coerce.date(),
  division: z.string().min(1),
  time: z.coerce.date(),
  client: z.string().min(1),
  abn: z.string().min(1),
  contact: z.string().min(1),
  phone: z.string(),
  email: z.string(),
  mobile: z.string(),
  street: z.string().min(1),
  suburb: z.string().min(1),
  postcode: z.string().min(1),
  country: z.tuple([z.string(), z.string().optional()]),
  check: z.unknown(),
  service: z.string().min(1),
  project_contact: z.string().min(1),
  project_phone: z.string(),
  project_email: z.string(),
  project_mobile: z.string(),
  project_street: z.string().min(1),
  project_suburb: z.string().min(1),
  project_postcode: z.string().min(1),
  project_country: z.tuple([z.string(), z.string().optional()]),
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

export default function CreateJobForm() {
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
          <h2 className="text-2xl font-semibold">Reference Card</h2>
        </div>
        <Separator />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="ref_num"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ref No.</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="completed_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Completed By</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

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
              name="division"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Bams Traffic Control"
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
              name="time"
              render={() => (
                <FormItem className="flex flex-col">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <div className="border rounded-md px-3 py-2 bg-muted text-sm text-muted-foreground">
                      {format(currentTime, "hh:mm: a")}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full company name or client name"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="abn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Australian Business Number (ABN)</FormLabel>
              <FormControl>
                <Input placeholder="Client ABN" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Client contact full name"
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
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Phone</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Client Phone"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Client Email" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Mobile</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Client Mobile"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input placeholder="Client Street" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="suburb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suburb</FormLabel>
                  <FormControl>
                    <Input placeholder="Client Suburb" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Client Postcode"
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
        <FormField
          control={form.control}
          name="check"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  //   checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Check if Same Contact</FormLabel>

                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full project name"
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
              name="project_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project contact full name"
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
              name="project_phone"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="project_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project contact email"
                      type="email"
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
              name="project_mobile"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Mobile</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Project contact mobile"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="project_street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Street"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="project_suburb"
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

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="project_postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project postcode"
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

        <FormField
          control={form.control}
          name="payment_person"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invoicing Contact</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payment person full name"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="payment_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Payment contact full name"
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
              name="payment_phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Phone </FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Payment contact phone"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input placeholder="Department" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Position" type="" {...field} />
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
              name="payment_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="payment_mobile"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Mobile</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Mobile"
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="payment_street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input placeholder="Street" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="payment_suburb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suburb</FormLabel>
                  <FormControl>
                    <Input placeholder="Suburb" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="payment_postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input placeholder="Postcode" type="" {...field} />
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

        <FormField
          control={form.control}
          name="service_instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Service Instruction"
                  className=""
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Bams Traffic Control Officer
          </label>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="officer_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="officer_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="officer_mobile"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Mobile</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Mobile"
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

        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-6">
            <Button type="button" className="w-full">
              Cancel
            </Button>
          </div>
          <div className="col-span-6">
            <Button type="submit" className="w-full">
              Create Reference Card
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
