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
  