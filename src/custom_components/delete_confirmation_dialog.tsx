import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  
  interface DeleteDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    data: {
      ref_num: string;
      project: string;
      client: string;
    };
  }
  
  export function DeleteConfirmationDialog({
    open,
    onOpenChange,
    onConfirm,
    data,
  }: DeleteDialogProps) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this job?
              <ul className="mt-4 text-sm list-disc list-inside text-muted-foreground">
                <li><strong>Ref#:</strong> {data.ref_num}</li>
                <li><strong>Project:</strong> {data.project}</li>
                <li><strong>Client:</strong> {data.client}</li>
                <li><strong>Client:</strong> {data.client}</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  