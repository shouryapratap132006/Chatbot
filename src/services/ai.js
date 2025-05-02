

export const askGemini = async ({ text, context }) => {
    try {
        const response = await fetch(`/api/ai/askGemini`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, context })
        });
        return response
    }
    catch (err) {
        console.error(err);
        throw new Error("Error communicating with Gemini API");
    }
}
