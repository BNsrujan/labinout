"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Studnet = {
  date: number | string;
  USN: string;
  name: string;
  phonenumber: any;
  lab: string;
  room: number;
  block: string;
  intime: string;
  outime: string;
  inout: "in" | "out";
};

export const columns: ColumnDef<Studnet>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "USN",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          USN
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phonenumber",
    header: "Phonenumber",
  },
  {
    accessorKey: "lab",
    header: "lab",
  },
  {
    accessorKey: "block",
    header: "block",
  },

  {
    accessorKey: "inout",
    header: "Inout",
  },

  {
    accessorKey: "name",
    header: "name",
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const Studnet = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(Studnet.USN)}
  //           >
  //             copy the student Usn
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
