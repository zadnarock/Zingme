import { GoogleGenAI, Type } from "@google/genai";
import { ExperienceIdea } from '../types';

export const generateExperience = async (userMood: string, userContext: string): Promise<ExperienceIdea[]> => {
  // Use the provided environment variable for the API key
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are ZingMe's AI Creative Director.
    The user feels: "${userMood}".
    Context/Preference: "${userContext}".
    
    Generate 3 distinct, vivid experience ideas.
    They should not be generic (e.g., "Go to a park"). They must include a "Twist" which represents the 'AmazeMe' magic layer (a personalized surprise or sensory detail).
    The tone should be exciting, curated, and premium.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "A catchy, short title for the experience" },
              description: { type: Type.STRING, description: "A vivid 1-sentence description" },
              vibe: { type: Type.STRING, description: "3 words describing the mood (e.g. 'Chill, Sunset, Acoustic')" },
              twist: { type: Type.STRING, description: "A magical detail or surprise element (The AmazeMe layer)" }
            },
            required: ["title", "description", "vibe", "twist"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as ExperienceIdea[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};