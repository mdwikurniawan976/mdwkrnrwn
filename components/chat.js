"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const { reply } = await res.json();
      setMessages([...messages, userMessage, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages([...messages, userMessage, { role: "assistant", content: "Maaf, terjadi kesalahan." }]);
    }
    setLoading(false);
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: "Hai, yang di sana! Saya asisten Dwi. Apa yang bisa saya bantu hari ini?" }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button onClick={openChat} className="p-3 text-white bg-blue-500 rounded-full shadow-lg">
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <Card className="fixed w-full max-w-md p-4 bg-white border shadow-xl rounded-xl bottom-16 right-4">
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="font-bold">Chat with Dwi's Assistant</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">✖</button>
            </div>
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-500">Sedang mengetik...</div>}
            <div className="flex gap-2 mt-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tulis pesan..." />
              <Button onClick={sendMessage} disabled={loading}>Kirim</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}