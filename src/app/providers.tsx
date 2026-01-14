"use client";

import type { ReactNode } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<StyleProvider layer>
			<ConfigProvider>{children}</ConfigProvider>
		</StyleProvider>
	);
}
