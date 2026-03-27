# Project Overview
You are a Senior Frontend Developer with a deep understanding of UI/UX.
Your task is to build a high-quality landing page for a 'Dementia Care Service' that assists early-stage dementia patients with their daily lives.

# Tech Stack
- Build Tool: Vite
- Language: TypeScript
- Framework: React (Functional Components, Hooks)
- Styling: Tailwind CSS
- Animation: Framer Motion (Scroll and interactive animations are REQUIRED)
- Icons: Lucide React

# Design System
- Primary Color: `#5377CC` (A calm, trustworthy blue)
- Background: `#F8FAFC` (Slate 50) or `#FFFFFF` for a clean look.
- Text: `#1E293B` (Slate 800) for high readability.
- Typography: Apply generous `tracking` (letter-spacing) and `leading` (line-height) to prevent the text from looking cramped.
- Vibe: Warm, intuitive, highly accessible, and professional.

# Key Features & Copywriting (Keep the Korean text as provided)
The landing page must consist of the following sections. Design the UI to highlight each feature. 
**Crucial:** Apply the primary color (`#5377CC`) to highlight specific key words in the text (e.g., '음성', '복약', '물건 찾기').

### 1. Hero Section
- **Headline:** "당신의 소중한 일상, 우리가 함께 기억할게요."
- **Sub-headline:** "초기 치매 환자와 가족을 위한 AI 맞춤형 돌봄 서비스. 다정한 음성 안내부터 스마트한 일상 보조까지, 매일매일 안심할 수 있는 하루를 선물합니다."
- **CTA Buttons:** [따뜻한 동행 시작하기] (Primary), [서비스 자세히 보기] (Secondary)
- **Design:** Smooth fade-in text and CTA buttons. Use a subtle gradient or accent background utilizing the Primary Color.

### 2. Core Features
- **Friendly AI Voice Interface:**
  - Title: "복잡한 조작 없이, 말하듯 편안하게"
  - Desc: "어려운 스마트폰 화면 대신 친근한 목소리로 대화하세요. 오늘 해야 할 일부터 다정한 안부까지, 인공지능이 가족처럼 곁에서 챙겨드립니다."
- **Smart Medication Management:**
  - Title: "잊는 일 없도록, 제시간에 꼼꼼하게"
  - Desc: "아침, 점심, 저녁 약 복용 시간을 절대 놓치지 않도록 알려드립니다. 복약 여부는 보호자에게도 실시간으로 공유되어 더욱 안심할 수 있습니다."
- **Item Finder (AI Vision):**
  - Title: "깜빡한 안경과 열쇠, 이제 헤매지 마세요"
  - Desc: "어디 두었는지 기억나지 않는 물건들, 스마트폰 카메라로 주변을 비춰보세요. AI가 자주 찾는 사물을 인식해 빠르게 위치를 찾아드립니다."

### 3. How It Works (Scroll Timeline)
Implement a vertical timeline layout where content blocks naturally fade in as the user scrolls down.
- **Step 1:** "앱을 설치하고 환자와 보호자의 계정을 쉽게 연결하세요."
- **Step 2:** "복약 시간, 자주 찾는 물건, 일정을 환자의 생활 패턴에 맞게 등록합니다."
- **Step 3:** "매일 아침, 기분 좋은 인사와 함께 하루의 일과 안내가 시작됩니다."
- **Step 4:** "보호자는 앱을 통해 환자의 복약 상태와 활동 기록을 언제든 확인할 수 있습니다."

### 4. Footer
- **Slogan:** "사랑하는 가족의 매일을 지키는 가장 스마트하고 따뜻한 방법."
- Include placeholder areas for simple service info and contact details.

# Animation & Interaction Requirements (Crucial)
It should feel like a well-crafted, polished product, not a static page.
- **Scroll Animations:** Use `framer-motion` (`whileInView` and `viewport={{ once: true }}`). Sections and cards should smoothly fade-up from the bottom as the user scrolls.
- **Stagger Effects:** When lists or card grids appear, use `staggerChildren` so items appear sequentially with a slight delay, not all at once.
- **Hover States:** Add subtle, natural interactive animations to buttons and cards on hover (e.g., `scale: 1.02`).

# Code Constraints
- All code must be fully responsive (Mobile, Tablet, Desktop).
- Do not put everything in one massive file. Propose a modular component structure for better maintainability (e.g., separating `Hero.tsx`, `Features.tsx`).
- **Immediate Task:** To quickly verify the UI direction, please write and provide the code for the **Hero Section** and **Core Features Section** first.