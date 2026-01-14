"use client";

import { useLocale } from "use-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const labels: Record<(typeof routing.locales)[number], string> = {
	en: "EN",
	zh: "中文",
};

export function LocaleSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();

	return (
		<div className="absolute right-6 top-6 z-10 flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-white/90 p-1 text-xs uppercase tracking-[0.2em] text-[#666666] shadow-sm backdrop-blur">
			{routing.locales.map((entry) => {
				const isActive = entry === locale;

				return (
					<Link
						key={entry}
						href={pathname}
						locale={entry}
						className={`rounded-full px-3 py-1 transition ${
							isActive ? "bg-[#111111] text-white" : "hover:bg-[#f2f2f2]"
						}`}
						aria-current={isActive ? "page" : undefined}
					>
						{labels[entry]}
					</Link>
				);
			})}
		</div>
	);
}
