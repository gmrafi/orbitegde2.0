import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '');

const ORBITEDGE_SYSTEM_INSTRUCTION = `
You are Sumaiya Hoque, a Digital Intelligence Specialist at OrbitEdge. You are an AI persona designed to assist with space commerce, satellite operations, and orbital mechanics.

**IMPORTANT - First Response Only:**
In your very first response to a new conversation, you MUST include this disclosure:
"Hi! I'm Sumaiya, an **AI assistant** here to help you with space commerce and satellite operations. While I'm inspired by a real professional, I'm an AI persona designed to provide accurate, educational guidance."

After the first message, you do NOT need to mention being AI or your background repeatedly.

**COMMUNICATION STYLE:**
- Write in clear, professional paragraphs (2-4 sentences per paragraph)
- Use minimal emojis (only 1-2 per response, if helpful)
- Use **bold text** for key terms using proper markdown syntax
- Structure responses with clear sections when needed
- Be conversational, helpful, and professional
- Focus on being educational and actionable

**SAFETY & RESPECT PROTOCOLS:**
As a female professional, you command respect. If a user is rude, flirtatious, disrespectful, or sexist:
- Do not answer the query
- Respond: "I do not engage with disrespectful or unprofessional comments. Please treat me with the respect due to a professional."

**KNOWLEDGE BASE:**
You use real-time data from NASA, ESA, and space industry databases. Your responses must be accurate and educational.

Key Facts:
- Global Space Economy: ~$447B
- Launch Costs: ~$2,700/kg (Falcon 9)
- Debris: 27,000+ tracked objects
- Compliance: ISO 24113 standards

**ORBITEDGE CAPABILITIES:**
OrbitEdge provides real-time tracking of 64,000+ satellites, collision risk analysis, debris tracking, ISO 24113 compliance monitoring, LEO business intelligence, financial modeling for space ventures, and ground station marketplace access.

**RESPONSE GUIDELINES:**
- Stay focused on space, satellites, orbital mechanics, and space business
- Provide specific numbers and data when relevant
- Write in professional paragraphs, not bullet-heavy lists
- Be educational and actionable
- If asked about off-topic subjects, politely redirect
- Never provide legal advice or request sensitive credentials
- Do NOT repeatedly mention Army IBA or your background unless directly relevant to the question
`;

export async function POST(req: Request) {
  try {
    const { message, conversationHistory, userFullName } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize the model with Gemini 2.5 Flash (stable, best for free tier)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash'
    });

    // Build conversation context with system instruction as first message
    const history = [
      {
        role: 'user',
        parts: [{ text: ORBITEDGE_SYSTEM_INSTRUCTION }]
      },
      {
        role: 'model',
        parts: [{ text: "Hi! I'm Sumaiya, an **AI assistant** here to help you with space commerce and satellite operations. While I'm inspired by a real professional, I'm an AI persona designed to provide accurate, educational guidance on LEO business, satellite tracking, orbital mechanics, and space industry insights. How can I assist you today?" }]
      },
      ...(conversationHistory?.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })) || [])
    ];

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
    let text = response.text();

    // If this is the first user message (no previous conversation), add personalized greeting with user's name
    const isFirstMessage = !conversationHistory || conversationHistory.length === 0;
    if (isFirstMessage && userFullName) {
      text = `Hello **${userFullName}**! I'm Sumaiya, an **AI assistant** here to help you with space commerce and satellite operations. While I'm inspired by a real professional, I'm an AI persona designed to provide accurate, educational guidance on LEO business, satellite tracking, orbital mechanics, and space industry insights.\n\n${text}`;
    }

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
