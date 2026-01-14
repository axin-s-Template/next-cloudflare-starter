"use client";

import type { ReactNode } from "react";
import type { AbstractIntlMessages } from "use-intl";
import { StyleProvider } from "@ant-design/cssinjs";
import { NextIntlClientProvider } from "next-intl";
import { ConfigProvider } from "antd";

export function Providers({
	children,
	locale,
	messages,
}: {
	children: ReactNode;
	locale: string;
	messages: AbstractIntlMessages;
}) {
	return (
		<StyleProvider layer>
			<ConfigProvider>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</ConfigProvider>
		</StyleProvider>
	);
}
