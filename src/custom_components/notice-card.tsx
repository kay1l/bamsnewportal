import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MessageCard = ({
  name,
  notice,
  filename,
  timestamp,
}: {
  name: string;
  notice: string;
  filename?: string;
  timestamp: string;
}) => (
  <Card className="flex gap-4 p-4 bg-muted">
    <Avatar>
      <AvatarImage src="/placeholder-avatar.png" alt={name} />
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>
    <CardContent className="flex-1 p-0">
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm mt-1 text-muted-foreground line-clamp-2">
        {notice}
      </p>
      {filename && (
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <FileIcon className="w-4 h-4" />
          <span>{filename}</span>
        </div>
      )}
      <div className="mt-2 text-xs text-muted-foreground">{timestamp}</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2" size="sm" variant="secondary">
            See More
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Notice</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground whitespace-pre-wrap">
            {name}
          </div>
          <div className="text-sm whitespace-pre-wrap">
            {notice}
          </div>
          <div className="text-sm text-muted-foreground whitespace-pre-wrap">
            {filename}
          </div>
          <div className="text-sm text-muted-foreground whitespace-pre-wrap">
            {timestamp}
          </div>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
);

export default function NoticeCard() {
  return (
    <div className="space-y-4">
      <MessageCard
        name="Pooja Kshatriya"
        notice="Test3"
        filename="shield.png"
        timestamp="Friday, 3rd November 04:51 am"
      />
      <MessageCard
        name="Pooja Kshatriya"
        notice="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini…"
        filename="affiliations2.png"
        timestamp="Monday, 6th November 10:57 am"
      />
    </div>
  );
}
