export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are Dwi's Assistant." }, { role: "user", content: message }],
      })
    });
    
    if (!response.ok) {
      console.error("Error response from OpenAI:", response.status, response.statusText);
      return Response.json({ reply: "Maaf, terjadi kesalahan. Coba lagi nanti." });
    }
    
    const data = await response.json();
    if (!data.choices || !data.choices.length) {
      console.error("Invalid response format:", data);
      return Response.json({ reply: "Maaf, tidak ada respons dari AI." });
    }
    
    return Response.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ reply: "Maaf, terjadi kesalahan saat memproses permintaan." });
  }
}