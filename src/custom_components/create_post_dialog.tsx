import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // ✅ new import
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function CreatePostDialog() {
  const [postMessage, setPostMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full ">Create New Notice</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create a New Notice</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              value={postMessage}
              onChange={(e) => setPostMessage(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="file">Attach File</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={() => {
              // Handle submit logic
              console.log("Post message:", postMessage);
              console.log("Selected file:", file);
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
