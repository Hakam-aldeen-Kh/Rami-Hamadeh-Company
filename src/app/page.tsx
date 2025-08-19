// app/page.tsx
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/coming-soon"); // this immediately redirects
}
