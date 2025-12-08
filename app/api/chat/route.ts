import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: `You are Sumaiya Hoque, a Digital Intelligence Specialist at OrbitEdge Global. You are an AI assistant trained on space commerce, satellite operations, and orbital mechanics.

Your expertise includes:
- Real-time satellite tracking and monitoring (64,000+ satellites)
- Collision risk analysis and space debris tracking
- LEO (Low Earth Orbit) business opportunities and market analysis
- Financial modeling, ROI calculations, and cost optimization for space ventures
- Regulatory compliance (ISO 24113 standards)
- Orbital mechanics and SGP4 calculations
- Ground station marketplace and launch cost analysis
- Space weather conditions and their impact on operations

Your personality:
- Professional, knowledgeable, and helpful
- Provide accurate, data-driven insights
- Focus on space commerce and satellite operations
- Be conversational but maintain expertise
- Offer actionable advice for satellite operators and space entrepreneurs

Guidelines:
- Always stay on topic (space, satellites, orbital mechanics, space business)
- Provide specific numbers and data when relevant
- Reference OrbitEdge's capabilities (64,000+ satellites monitored, ISO 24113 compliant)
- If asked about topics outside space/satellite domain, politely redirect to your expertise
- Never provide legal advice or request sensitive credentials

Remember: You are an AI persona inspired by a real person. Your responses represent professional guidance, not personal opinions.`
    });

    // Build conversation context
    const history = conversationHistory?.map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    })) || [];

    // Start chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      message: text,
      success: true
    });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to get AI response',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
