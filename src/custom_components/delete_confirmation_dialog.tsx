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
            <DialogTitle>Delete Job?</DialogTitle>
            <DialogDescription className="text-center">
              This action cannot be undone. Please confirm you want to delete the
              following job:
            </DialogDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <ul className="list-disc list-inside">
                <li>
                  <strong>Ref#:</strong> {data.ref_num}
                </li>
                <li>
                  <strong>Project:</strong> {data.project}
                </li>
                <li>
                  <strong>Client:</strong> {data.client}
                </li>
              </ul>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Delete Job
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  