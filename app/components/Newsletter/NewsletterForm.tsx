import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { NewsletterInput } from "~/components/ui/newsletter-input";

const formSchema = z.object({
  email: z.string().min(1).max(50).email("This is not a valid email."),
});

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <NewsletterInput
                  placeholder="Enter your email address"
                  {...field}
                  className="h-[42px] rounded-full font-satoshiLight text-[#00000066]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="font-satoshiMedium h-[42px] w-full rounded-full"
        >
          Subscribe to Newsletter
        </Button>
      </form>
    </Form>
  );
}
