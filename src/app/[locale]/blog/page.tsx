import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { constructMetadata } from "@/lib/metadata";

const postKeys = ["edge", "i18n", "deploy"] as const;

type PostKey = (typeof postKeys)[number];

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata.Blog" });

	return constructMetadata({
		title: t("title"),
		description: t("description"),
		locale,
		pathname: "/blog",
	});
}

export default async function BlogPage({
	params,
}: {
	params: Promise<{ locale: AppLocale }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Blog" });

	return (
		<main className="min-h-screen bg-white text-[#111111]">
			<div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 md:py-20">
				<header className="flex flex-col gap-4">
					<p className="text-xs uppercase tracking-[0.4em] text-[#666666]">
						{t("eyebrow")}
					</p>
					<h1 className="text-4xl font-semibold leading-tight md:text-5xl">
						{t("title")}
					</h1>
					<p className="max-w-2xl text-base leading-relaxed text-[#444444]">
						{t("subtitle")}
					</p>
				</header>

				<section className="grid gap-6 md:grid-cols-2">
					{postKeys.map((key) => (
						<article
							key={key}
							className="flex flex-col gap-3 rounded-2xl border border-[#e5e5e5] bg-white p-6"
						>
							<p className="text-xs uppercase tracking-[0.3em] text-[#666666]">
								{t(`posts.${key}.tag`)}
							</p>
							<h2 className="text-xl font-semibold text-[#111111]">
								{t(`posts.${key}.title`)}
							</h2>
							<p className="text-sm leading-relaxed text-[#555555]">
								{t(`posts.${key}.excerpt`)}
							</p>
							<span className="text-xs text-[#999999]">
								{t(`posts.${key}.meta`)}
							</span>
						</article>
					))}
				</section>

				<footer className="text-xs uppercase tracking-[0.3em] text-[#666666]">
					{t("footer")}
				</footer>
			</div>
		</main>
	);
}
