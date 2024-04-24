"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="courses">Select Courses</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="mobile-development">
                Mobile Development
              </SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="ux-design">UX Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="min-h-[120px]"
          id="message"
          placeholder="Enter your message"
        />
      </div>
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
}
