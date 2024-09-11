import { Card, CardContent } from "@/components/ui/card";
import { FileX2 } from "lucide-react";

type EmptyItemProps = {
  title: string;
  description: string;
};

export default function EmptyItem({
  title,
  description,
}: Readonly<EmptyItemProps>) {
  return (
    <Card className="mt-10 w-full mx-auto">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <FileX2 className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </CardContent>
    </Card>
  );
}
