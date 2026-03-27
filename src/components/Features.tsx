import { motion,  type Variants } from 'framer-motion';
import { Mic, Pill, Camera } from 'lucide-react';

const features = [
  {
    icon: Mic,
    tag: '음성 인터페이스',
    title: '복잡한 조작 없이,\n말하듯 편안하게',
    description:
      '어려운 스마트폰 화면 대신 친근한 목소리로 대화하세요. 오늘 해야 할 일부터 다정한 안부까지, 인공지능이 가족처럼 곁에서 챙겨드립니다.',
    highlight: '음성',
    accentColor: '#5377CC',
    bgAccent: 'rgba(83, 119, 204, 0.08)',
  },
  {
    icon: Pill,
    tag: '복약 관리',
    title: '잊는 일 없도록,\n제시간에 꼼꼼하게',
    description:
      '아침, 점심, 저녁 약 복용 시간을 절대 놓치지 않도록 알려드립니다. 복약 여부는 보호자에게도 실시간으로 공유되어 더욱 안심할 수 있습니다.',
    highlight: '복약',
    accentColor: '#5377CC',
    bgAccent: 'rgba(83, 119, 204, 0.08)',
  },
  {
    icon: Camera,
    tag: '물건 찾기',
    title: '깜빡한 안경과 열쇠,\n이제 헤매지 마세요',
    description:
      '어디 두었는지 기억나지 않는 물건들, 스마트폰 카메라로 주변을 비춰보세요. AI가 자주 찾는 사물을 인식해 빠르게 위치를 찾아드립니다.',
    highlight: '물건 찾기',
    accentColor: '#5377CC',
    bgAccent: 'rgba(83, 119, 204, 0.08)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Background decorative elements — mirrors Hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: '#5377CC', opacity: 0.05 }}
        />
        <div
          className="absolute bottom-0 -left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: '#6B8EE8', opacity: 0.07 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: 'rgba(83, 119, 204, 0.1)', color: '#5377CC' }}
          >
            핵심 기능
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            매일의 일상을 더{' '}
            <span style={{ color: '#5377CC' }}>안전하고 편리하게</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed tracking-wide max-w-2xl mx-auto">
            AI 기술이 치매 환자의 일상 속 불편함을 하나씩 해결합니다.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.tag}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-3xl p-8 bg-white border border-slate-100 cursor-default overflow-hidden group"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(83,119,204,0.05) 0%, rgba(107,142,232,0.03) 100%)',
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.bgAccent }}
                >
                  <Icon size={26} style={{ color: feature.accentColor }} strokeWidth={1.8} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: feature.bgAccent, color: feature.accentColor }}
                >
                  {feature.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 leading-snug tracking-tight mb-4 whitespace-pre-line">
                  {feature.title}
                </h3>

                {/* Description with highlight */}
                <p className="text-slate-500 leading-relaxed tracking-wide text-sm">
                  {feature.description.split(feature.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <span className="font-semibold" style={{ color: feature.accentColor }}>
                          {feature.highlight}
                        </span>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                  style={{ backgroundColor: feature.accentColor }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
