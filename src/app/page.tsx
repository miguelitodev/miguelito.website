import Image from "next/image";
import Link from "next/link";

import {
	RiLinkedinFill,
	RiGithubFill,
	RiInstagramLine,
	RiTwitterFill,
	RiThreadsLine,
	RiMediumFill,
} from "react-icons/ri";
import { FiFigma } from "react-icons/fi";

export default function Home() {
	const socialMedias = [
		{
			name: "Linkedin",
			href: "https://www.linkedin.com/in/miguelitodev/",
			component: (title: string, size: string) => (
				<RiLinkedinFill title={title} size={size} />
			),
		},
		{
			name: "Github",
			href: "https://github.com/miguelitodev",
			component: (title: string, size: string) => (
				<RiGithubFill title={title} size={size} />
			),
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/miguelito.dev/",
			component: (title: string, size: string) => (
				<RiInstagramLine title={title} size={size} />
			),
		},
		{
			name: "Threads",
			href: "https://www.threads.net/@miguelito.dev",
			component: (title: string, size: string) => (
				<RiThreadsLine title={title} size={size} />
			),
		},
		{
			name: "Twitter",
			href: "https://twitter.com/miguelitoodev",
			component: (title: string, size: string) => (
				<RiTwitterFill title={title} size={size} />
			),
		},
		{
			name: "Medium",
			href: "https://medium.com/@miguelito.dev",
			component: (title: string, size: string) => (
				<RiMediumFill title={title} size={size} />
			),
		},
		{
			name: "Figma",
			href: "https://www.figma.com/@miguelitodev",
			component: (title: string, size: string) => (
				<FiFigma title={title} size={size} />
			),
		},
	];

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<Image
				loading="lazy"
				placeholder="blur"
				blurDataURL="/img/hamster-loading.jpg"
				src="/img/hamster-loading-coming.gif"
				width={300}
				height={300}
				alt="Hamster doing things"
			/>
			<h1 className="mt-3 font-sans text-3xl antialiased font-bold tracking-wide">
				Coming soon
			</h1>
			<div className="mt-5">
				<ul className="flex flex-row gap-2">
					{socialMedias.map((socialMedia) => (
						<li key={socialMedia.name}>
							<Link href={socialMedia.href}>
								{socialMedia.component(socialMedia.name, "2em")}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
