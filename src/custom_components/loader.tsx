import { Loader2 } from "lucide-react";

export function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loader2 className="h-8 w-8 animate-spin text-gray-800" />
    </div>
  );
}