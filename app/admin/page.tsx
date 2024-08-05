import { Studnet, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Studnet[]> {
  const res = await fetch(
    "https://66b0cdca6a693a95b53a46b9.mockapi.io/Student"
  );

  const data = await res.json();
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
