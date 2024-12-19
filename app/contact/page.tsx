import Link from "next/link";

export default function Page() {
	return (
		<main data-barba="container" data-barba-namespace="contact">
			<div className="flex gap-4">
				<Link href={"/about"}>About</Link>
				<Link href={"/blogs"}>Blogs</Link>
				<Link href={"/contact"}>Contact</Link>
			</div>

			<h1 className="text-3xl">Contact</h1>
		</main>
	);
}
