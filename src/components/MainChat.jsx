"use client";
import React from "react";
import { IoMdSend } from "react-icons/io";
import { useChatContext } from "../utils/ChatContext";
import Image from "next/image";

const MainChat = ({ inputText, setInputText, handleApiRequest, chats }) => {
  const { currentChat } = useChatContext();

  const currentChatId = currentChat ? currentChat.id : null;
  const selectedChat = chats.find((chat) => chat.id === currentChatId);
  const messages = selectedChat ? selectedChat.messages : [];

  return (
    <div className="urbanist text-white h-full w-full flex flex-col justify-between items-center md:pl-[300px] ">
      <div className="w-[300] text-text text-[15px] min-h-[70vh]  pt-20  overflow-y-auto">
        {selectedChat ? (
          <div className="max-w-[700px] px-8 ">
            {messages.map((message, index) => (
              <div className="max-w-[700px] pb-10" key={index}>
                <div className="flex justify-start items-start gap-4">
                  <Image src="/logo.png" height={40} width={40}></Image>
                  {message}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[20px] font-semibold text-primary__color">
            "Please create a new chat to access LongShot AI"
          </p>
        )}
      </div>
      <div className="urbanist relative flex flex-col items-center justify-center ">
        <input
          type="text"
          placeholder="Instruct a Prompt"
          className="w-[300px] text-white bg-bg__color px-4 py-3 mb-4 rounded-xl border border-border_grey relative z-10 pr-20 sm:min-w-[540px] md:min-w-[700px] "
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleApiRequest();
            }
          }}
        />

        <IoMdSend
          className="z-10 text-[26px] absolute bottom-[66px] right-4 text-primary__color"
          onClick={handleApiRequest}
        />

        <p className="relative text-[10px] text-slate-400 pb-6">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default MainChat;
