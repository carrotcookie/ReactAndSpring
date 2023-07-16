import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ChatMain.css";
import uuid from "react-uuid";

const ChatMain = () => {
  // const baseUrl = "http://localhost:8080";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") {
      return;
    }

    const message = {
      role: "user",
      content: input.replace(/\n/g, "<br/>"),
    };

    setMessages([...messages, message]);
    setInput("");

    await axios
        .post("/api/chat", message
        )
        .then((response) => {
            console.log(response.data)
            setMessages([...messages, message, response.data])
            console.log({messages})
        })
        .catch((error) => {
            console.log(error);
        });
  };

  const dataAxios = async () => {
    
  }

  const pressEnter = (e) => {
    if (e.shiftKey) {
      return; // Shift + Enter일 때 출력x
    } else if (e.keyCode === 13) {
      e.preventDefault(); // Enter 키 개행x
      sendMessage();
    }
  };

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="wrap">
      <div className="container">
        <Chatlist />
        <div className="chat_main" ref={scrollRef}>
          {messages.map((message) => (
            <div className="message_container" key={uuid()}>
              <div className="icon">■</div>
              <div
                white-space="pre-wrap"
                className={`message ${message.role}`}
                dangerouslySetInnerHTML={{ __html: message.content }}
              >
                {/* {console.log("id", message.id)} */}
              </div>
            </div>
          ))}
          <div className="chat_input_box">
            <textarea
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="type_input"
              onKeyDown={pressEnter}
            />
            <button onClick={sendMessage} className="type_btn">
              <p>Send</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Chatlist() {
  return <div className="chat_list"></div>;
}

export default ChatMain;
