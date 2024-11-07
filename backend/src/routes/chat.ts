import express, { Request, Response, Router, RequestHandler } from "express";
import { OpenAI } from 'openai';
import ChatMessage from '../models/ChatMessage';

const router: Router = express.Router();


// Initialize OpenAI with API key
const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

// Define handler as a RequestHandler
const handleChatMessage: RequestHandler = async (req, res) => {
    try {
        const { user, message } = req.body;

        // Use OpenAI to generate a response
        const response = await openAI.chat.completions.create({
            model: 'gpt-4', // Ensure this is a valid model for OpenAI
            messages: [
                { role: 'user', content: message }
            ],
            max_tokens: 100,
        });

        console.log("resss",response)

        const botMessage = response.choices?.[0].message?.content?.trim() || "Sorry, I didn't understand that.";

        // Save messages to MongoDB
        const userMessage = new ChatMessage({ user, message, fromBot: false });
        const botResponse = new ChatMessage({ user, message: botMessage, fromBot: true });

        await userMessage.save();
        await botResponse.save();

        res.status(201).json({ userMessage, botResponse });

    } catch (error) {
        console.error('Error processing message:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
};

// Define the POST route with the handler
router.post('/message', handleChatMessage);

export default router;
