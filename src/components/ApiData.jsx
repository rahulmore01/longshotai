"use client";
import React, { useState } from "react";
import axios from "axios";
import ChatSidebar from "./ChatSidebar";
import MainChat from "./MainChat";
import { useChatContext } from "../utils/ChatContext";

const ApiData = () => {
  const { currentChat, setCurrentChat } = useChatContext();
  const [inputText, setInputText] = useState("");
  const [chats, setChats] = useState([]);
  const apiUrl = "https://api-v2.longshot.ai/custom/api/generate/instruct";
  // const token = process.env.API_KEY;
  const token = "c1d4f8db9f4b92a3c302d362eb93fb319825172d";

  const handleNewChatClick = () => {
    const newChat = {
      id: Date.now(),
      messages: [],
    };
    setChats((prevChats) => [...prevChats, newChat]);
    setCurrentChat(newChat);
  };

  const deleteChat = (chatId) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
  };

  const handleChatClick = (chat) => {
    setCurrentChat(chat);
  };

  const handleApiRequest = () => {
    const updatedRequestData = {
      text: inputText,
    };

    axios
      .post(apiUrl, updatedRequestData, axiosConfig)
      .then((response) => {
        const newMessage = response.data.copies
          .map((copy) => copy.content)
          .join(" ");
        addMessageToChat(currentChat.id, newMessage);
        updateChatMessages(response.data.copies);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const addMessageToChat = (chatId, message) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  const updateChatMessages = (newMessages) => {
    setCurrentChat((prevChat) => ({ ...prevChat, copies: newMessages }));
  };

  return (
    <div className="urbanist w-screen h-screen bg-bg__color ">
      <ChatSidebar
        chats={chats}
        handleNewChatClick={handleNewChatClick}
        deleteChat={deleteChat}
        handleChatClick={handleChatClick}
      />
      <MainChat
        inputText={inputText}
        setInputText={setInputText}
        handleApiRequest={handleApiRequest}
        currentChat={currentChat}
        chats={chats}
      />
    </div>
  );
};

export default ApiData;
