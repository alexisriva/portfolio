import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import experiences from '../assets/experiences.json';

const useAISummary = (initialTone = 'Professional') => {
  const [tone, setTone] = useState(initialTone);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateSummary = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      setError('API Key is missing. Please add VITE_GEMINI_API_KEY to your .env file.');
      return;
    }

    setLoading(true);
    setError(null);
    setSummary('');

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
        You are an AI assistant summarizing a software engineer's experience.
        
        Here is the engineer's resume data:
        ${JSON.stringify(experiences)}

        Please write a short, engaging summary (max 3-4 sentences) of this person's experience and skills.
        
        TONE: ${tone}
        
        Important:
        - Strictly adhere to the requested tone.
        - Highlight the most impressive achievements (e.g., Tech Lead, Architecture, 7 years experience).
        - Do not make up facts not present in the data.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setSummary(text);
    } catch (err) {
      console.error("Error generating summary:", err);
      setError('Failed to generate summary. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return {
    tone,
    setTone,
    summary,
    loading,
    error,
    generateSummary,
  };
};

export default useAISummary;
