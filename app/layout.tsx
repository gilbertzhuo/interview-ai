import SideBar from "@/components/SideBar";
import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temus - AI-Powered Interviews",
  openGraph: {
    title: "Temus - AI-Powered Interviews",
    description:
      "Temus is an AI-powered interview platform that helps practice for client interview.",
    images: [
      {
        url: "https://demo.useTemus.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temus - AI-Powered Interviews",
    description:
      "Temus is an AI-powered interview platform that helps practice for client interview.",
    images: ["https://demo.useTemus.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useTemus.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01'] flex">
        {/* <SideBar /> */}
        <div className="flex-1 bg-white min-h-screen mx-auto flex flex-col max-w-[1600px] px-6 pt-2 md:px-10 md:pt-8">
          {children}
        </div>
      </body>
    </html>
  );
}
