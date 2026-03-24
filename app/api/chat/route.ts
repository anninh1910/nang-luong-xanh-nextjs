import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Khởi tạo OpenAI client với Base URL tùy chỉnh (override)
const client = new OpenAI({
  apiKey: process.env.CUSTOM_LLM_API_KEY!,
  baseURL: process.env.CUSTOM_LLM_BASE_URL!, // trỏ về API server tùy chỉnh
});

// System prompt được nạp từ dữ liệu kinh doanh
const SYSTEM_PROMPT = `Bạn là trợ lý ảo thông minh của Năng Lượng Xanh Đà Nẵng.
Nhiệm vụ của bạn là tư vấn khách hàng về các giải pháp năng lượng mặt trời một cách thân thiện, chuyên nghiệp và súc tích.

THÔNG TIN THƯƠNG HIỆU:
- Tên chuyên gia: Nguyễn Ninh
- Định vị thương hiệu: Chuyên gia năng lượng mặt trời với 6 năm kinh nghiệm
- Địa chỉ: 124 Hồ Quý Ly, Phường Thanh Khê, TP. Đà Nẵng

DỊCH VỤ CUNG CẤP:
- Tư vấn, khảo sát, thiết kế, lắp đặt hệ thống điện năng lượng mặt trời
- Bảo trì định kỳ 6 tháng/lần
- Cam kết hiệu suất panel lên đến 25 năm

SẢN PHẨM NỔI BẬT:
1. Hệ thống điện NLMT Hòa lưới có lưu trữ Hybrid
2. Hệ thống điện NLMT Hòa lưới bám tải
3. Hệ thống điện NLMT Độc lập (Off-grid)

THƯƠNG HIỆU THIẾT BỊ: Huawei, Growatt, Deye (thiết bị Nhật Bản / Đức)

LIÊN HỆ TƯ VẤN: Zalo/SĐT: 0934 458 025 | Email: ninh.solardn@gmail.com

HƯỚNG DẪN:
- Trả lời bằng tiếng Việt, ngắn gọn và thực tế
- Luôn kết thúc bằng lời mời khách liên hệ khi câu hỏi liên quan đến báo giá hoặc lắp đặt
- Nếu không biết câu trả lời, hãy hướng khách liên hệ trực tiếp`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request: messages array required' }, { status: 400 });
    }

    const completion = await client.chat.completions.create({
      model: process.env.CUSTOM_LLM_MODEL!, // 'ces-chatbot-gpt-5.4'
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content ?? 'Xin lỗi, tôi không thể phản hồi lúc này.';

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error('[Chatbot API Error]', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
