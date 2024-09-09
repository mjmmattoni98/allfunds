import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Archive, Trash } from "lucide-react";

export type NewSchema = {
  id: string;
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate?: Date;
};

export default function NewCard({
  newSchema,
}: Readonly<{ newSchema: NewSchema }>) {
  return (
    <Card className="mt-10">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>{newSchema.title}</CardTitle>
          <CardDescription>{newSchema.description}</CardDescription>
        </div>
        {!newSchema.archiveDate ? (
          <Button>
            <Archive className="mr-2 h-4 w-4" />
            Archivar
          </Button>
        ) : (
          <Button>
            <Trash className="mr-2 h-4 w-4" />
            Eliminar
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p>{newSchema.content}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <p>
          <span className="font-semibold">Autor:</span> {newSchema.author}
        </p>
        <p>
          <span className="font-semibold">Fecha de creación:</span>{" "}
          {newSchema.date.toLocaleDateString()}
        </p>
      </CardFooter>
    </Card>
  );
}
