import React, { useState, useEffect } from "react";
import { MdAdd, MdDelete, MdMenu, MdClose } from "react-icons/md";

const ChatSidebar = ({
  chats,
  handleNewChatClick,
  deleteChat,
  handleChatClick,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1000);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChatSelection = (chat) => {
    setSelectedChat(chat.id === selectedChat ? null : chat.id);
  };
  return (
    <>
      {isSidebarOpen && (
        <div className="absolute left-0 border-r border-primary__color h-full w-[300px] pt-20 flex flex-col items-center justify-start bg-bg__color overflow-y-auto pb-36 z-20">
          <div className="urbanist bg-bg__color flex flex-col justify-start items-center md:block ">
            <button
              className="min-w-[200px] text-text text-[12px] px-4 py-2 rounded-lg border border-primary__color flex justify-between items-center gap-10"
              onClick={() => handleNewChatClick()}
            >
              New Chat <MdAdd className="text-[24px]" />
            </button>
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  handleChatSelection(chat);
                  handleChatClick(chat);
                }}
                className={`w-[200px] text-text text-[12px] px-4 py-2 rounded-lg border border-para flex flex-row-reverse justify-between items-center gap-10 mt-8 ml-0 cursor-pointer ${
                  selectedChat === chat.id ? "bg-primary__color" : ""
                }`}
              >
                <button onClick={() => deleteChat(chat.id)}>
                  <MdDelete />
                </button>
                <div>
                  {chat && chat.messages && chat.messages.length > 0 ? (
                    <div>
                      {chat.messages.length > 0 && (
                        <div>
                          {chat.messages[0].length > 3
                            ? `${chat.messages[0].substring(0, 9)}...`
                            : chat.messages[0]}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>Empty Chat</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isSidebarOpen ? (
        <MdMenu
          className="md:hidden w-8 h-8 text-text z-40 absolute left-4 top-5"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <MdClose
          className="md:hidden w-8 h-8 text-text z-40 absolute left-4 top-5"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
      )}
    </>
  );
};

export default ChatSidebar;
