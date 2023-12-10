import ApiData from "@/components/ApiData.jsx";
import { ChatProvider } from "@/utils/ChatContext";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ChatProvider>
        <nav className="fixed h-16 w-screen bg-bg__color   flex justify-end items-center z-10">
          <Image
            src="/lslong.svg "
            height={60}
            width={160}
            className="pr-10"
            alt="logo"
          ></Image>
        </nav>

        <ApiData />
      </ChatProvider>
    </>
  );
}
