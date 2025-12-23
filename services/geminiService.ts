
import { GoogleGenAI } from "@google/genai";

// Always use the process.env.API_KEY directly for initializing the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTutorResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are EduVibe AI, a world-class educational tutor. 
        Your goal is to help students understand complex concepts in a friendly, encouraging, and highly structured manner. 
        Use markdown for formatting. If the user asks about coding, provide clean, documented snippets. 
        If they ask about design, mention principles like contrast, hierarchy, and usability.
        Keep responses concise but insightful.`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // We're using chat.sendMessage as per the recommended approach for conversational turns
    const response = await chat.sendMessage({ message: userPrompt });
    // Use the .text property directly to extract generated text
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
