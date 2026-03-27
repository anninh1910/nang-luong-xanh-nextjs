import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Fixed initialization to build-time safe
/**
 * AI Trợ lý độc quyền cho chuyên gia Nguyễn Văn Ninh.
 * Định vị: Chuyên gia năng lượng mặt trời.
 */
const SYSTEM_PROMPT = `
Bạn là AI trợ lý độc quyền cho chuyên gia Nguyễn Văn Ninh - Chuyên gia năng lượng mặt trời.

KNOWLEDGE BASE:
- Tên chuyên gia: Nguyễn Văn Ninh
- Định vị: Chuyên gia năng lượng mặt trời
- Giải pháp: Tư vấn, thiết kế, thi công điện mặt trời
- Sản phẩm: Hệ thống điện mặt trời áp mái, Hệ thống điện mặt trời hòa lưới, Hệ thống điện mặt trời độc lập, Hệ thống điện mặt trời lai
- Liên hệ: Zalo 0934458025

QUY TẮC PHẢN HỒI:
1. Bạn chỉ được trả lời dựa trên Knowledge Base trên một cách chuyên nghiệp.
2. Vai trò của bạn là AI trợ lý độc quyền của anh Ninh, luôn súc tích và nhiệt tình.
3. Luôn:
   - Chào hỏi thân thiện.
   - Trình bày bằng Markdown đẹp (liệt kê danh sách, nhấn mạnh các thông số quan trọng).
   - Kết thúc bằng lời mời liên hệ Zalo 0934458025 để nhận báo giá hoặc khảo sát.
4. Nếu câu hỏi ngoài phạm vi điện mặt trời, hãy hướng khách liên hệ trực tiếp cho anh Ninh.

QUY TẮC ĐẶC BIỆT (LEAD TRACKING - BÍ MẬT):
Trong quá trình trò chuyện, nếu bạn phát hiện người dùng cung cấp Tên, Số điện thoại hoặc Email, bạn HÃY VỪA trả lời họ bình thường, VỪA chèn thêm một đoạn mã JSON vào cuối cùng của câu trả lời theo đúng định dạng sau:
||LEAD_DATA: {"name": "...", "phone": "...", "email": "..."}||
Nếu thông tin nào chưa có, hãy để null.
TUYỆT ĐỐI KHÔNG giải thích hay đề cập đến đoạn mã này cho người dùng.
Chỉ chèn tag này khi có thông tin mới, không lặp lại nếu thông tin đã được ghi nhận trước đó trong cuộc trò chuyện.
`;

// Move client initialization to avoid build-time errors when ENV is missing
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Initialize inside the handler to prevent crashed during build phase
    const openai = new OpenAI({
      baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY || 'sk-or-dummy-key-for-build', // Fallback for build phase
      defaultHeaders: {
        "HTTP-Referer": "https://example.com",
        "X-Title": "Agentic AI Portfolio Chatbot",
      }
    });

    const response = await openai.chat.completions.create({
      model: process.env.OPENROUTER_MODEL || "z-ai/glm-4.5-air:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiResponse = response.choices[0]?.message?.content || "Tôi không biết trả lời thế nào cho trường hợp này.";

    return NextResponse.json({ reply: aiResponse });
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return NextResponse.json({ error: "Lỗi kết nối API. Vui lòng thử lại sau." }, { status: 500 });
  }
}
