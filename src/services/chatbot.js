export const getChatbots = async ({ token }) => {
    const response = await fetch("/api/chatbot/getByCreator", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const { err } = await response.json();
      console.log(err);
      throw new Error(err || "Error getting chatbot");
    }
  
    return response.json();
  };


export const createChatbot = async ({ name, context, token }) => {
    const response = await fetch("/api/chatbot/create", {
      method: "POST",
      body: JSON.stringify({ name, context }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const { err } = await response.json();
      console.log(err);
      throw new Error(err || "Error creating chatbot");
    }
  
    return response;
  };


export const getAllChatBots = async () => { 
    const response = await fetch("/api/chatbot/getAll", {
        method: "GET",
    });
    if (!response.ok) {
        const { err } = await response.json();
        console.log(err);
        throw new Error(err || "Error getting all chatbots");
    }
    return response.json();
}  
export const getChatbotByName = async ({ name, token }) => {
  const response = await fetch(`/api/chatbot/getByChatbotName?name=${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    let errorMsg = "Error getting chatbot";

    try {
      const data = await response.json();
      errorMsg = data.err || errorMsg;
    } catch (e) {
      const text = await response.text();
      console.warn("Non-JSON error response:", text);
      errorMsg = text || errorMsg;
    }

    throw new Error(errorMsg);
  }

  // ✅ FIX: Safely check if body exists before parsing
  const text = await response.text();
  if (!text) {
    throw new Error("Empty response from server");
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON:", text);
    throw new Error("Invalid JSON response");
  }
};

  