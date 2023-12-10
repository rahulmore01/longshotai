import ApiData from "@/components/ApiData.jsx";
import { ChatProvider } from "@/utils/ChatContext";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ChatProvider>
        <nav className="fixed h-16 w-screen bg-bg__color   flex justify-end items-center z-10">
          <Image
            src="/ls.png "
            width={160}
            height={60}
            className="pr-10"
          ></Image>
        </nav>

        <ApiData />
      </ChatProvider>
    </>
  );
}
