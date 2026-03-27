import { motion,  type Variants } from 'framer-motion';
import { Download, Settings, Sun, Shield } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: '앱 설치 및 계정 연결',
    description: '앱을 설치하고 환자와 보호자의 계정을 쉽게 연결하세요.',
    detail: '간단한 회원가입 후 환자-보호자 간 계정을 연동하면 모든 준비가 완료됩니다.',
  },
  {
    number: '02',
    icon: Settings,
    title: '생활 패턴 등록',
    description: '복약 시간, 자주 찾는 물건, 일정을 환자의 생활 패턴에 맞게 등록합니다.',
    detail: '복약 시간부터 소지품 목록까지 한 번만 설정하면 AI가 스스로 학습합니다.',
  },
  {
    number: '03',
    icon: Sun,
    title: '매일 아침 스마트 안내 시작',
    description: '매일 아침, 기분 좋은 인사와 함께 하루의 일과 안내가 시작됩니다.',
    detail: '친근한 음성으로 오늘의 날씨, 일정, 복약 시간 등을 자연스럽게 알려드립니다.',
  },
  {
    number: '04',
    icon: Shield,
    title: '보호자 실시간 모니터링',
    description: '보호자는 앱을 통해 환자의 복약 상태와 활동 기록을 언제든 확인할 수 있습니다.',
    detail: '이상 징후가 감지되면 즉시 보호자에게 알림이 발송됩니다.',
  },
];

const lineVariants : Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const itemVariants : Variants  = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: 'rgba(83, 119, 204, 0.1)', color: '#5377CC' }}
          >
            이용 방법
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            시작은{' '}
            <span style={{ color: '#5377CC' }}>간단하게</span>,
            <br />
            효과는 <span style={{ color: '#5377CC' }}>매일매일</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200 hidden sm:block" />
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top hidden sm:block"
            style={{ backgroundColor: '#5377CC', opacity: 0.4 }}
          />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className={`relative flex items-start gap-8 sm:gap-0 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`w-full sm:w-5/12 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}
                  >
                    <div
                      className="bg-white rounded-3xl p-7 border border-slate-100"
                      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'rgba(83, 119, 204, 0.1)' }}
                        >
                          <Icon size={20} style={{ color: '#5377CC' }} strokeWidth={1.8} />
                        </div>
                        <span
                          className="text-xs font-black tracking-widest uppercase"
                          style={{ color: '#5377CC' }}
                        >
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed tracking-wide font-medium mb-2">
                        {step.description}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed tracking-wide">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center dot — desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg"
                      style={{ backgroundColor: '#5377CC' }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Mobile step number */}
                  <div
                    className="sm:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs shadow-md"
                    style={{ backgroundColor: '#5377CC' }}
                  >
                    {step.number}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
