import { motion } from 'framer-motion'; // framer-motion 애니메이션 라이브러리 import
import { ArrowRight } from 'lucide-react';
import familyImg from '../assets/family.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-100/70">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: '#5377CC' }}
        />
        <div
          className="absolute bottom-24 -left-32 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#6B8EE8' }}
        />
      </div>

      {/* Right: Full-bleed image with diagonal "/" slash */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute right-0 top-0 h-full"
        style={{ width: '56%', zIndex: 1 }}
      >
        <div
          className="w-full h-full"
          style={{ clipPath: 'polygon(13% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <img
            src={familyImg}
            alt="따뜻한 치매 케어 서비스"
            className="w-full h-full object-cover object-center"
          />
          {/* Edge blend + subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(248,250,252,0.92) 0%, rgba(248,250,252,0.35) 16%, transparent 32%), linear-gradient(to top, rgba(15,23,42,0.18) 0%, transparent 45%)',
            }}
          />
        </div>
      </motion.div>

      {/* Left: Text content */}
      <div className="relative flex items-center min-h-screen" style={{ zIndex: 10 }}>
        <div className="w-full lg:w-[48%] px-8 lg:px-14 xl:px-20 py-20">

   

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-[54px] font-bold leading-[1.15] text-slate-800 mb-7"
            style={{ letterSpacing: '-0.02em' }}
          >
            당신의 소중한 일상,
            <br />
            <span>
              <span style={{ color: '#5377CC' }}>우리가 함께</span>
              {' '}기억할게요.
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="origin-left mb-8 h-[2px] w-12 rounded-full"
            style={{ backgroundColor: '#5377CC', opacity: 0.35 }}
          />

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="text-[17px] text-slate-400 leading-[1.8] tracking-wide max-w-md mb-12"
          >
            초기 치매 환자와 가족을 위한 AI 맞춤형 돌봄 서비스.
            <br className="hidden sm:block" />
            다정한{' '}
            <span className="font-medium" style={{ color: '#7a93d4' }}>음성</span> 안내부터{' '}
            <span className="font-medium" style={{ color: '#7a93d4' }}>스마트한 일상 보조</span>까지,
            <br className="hidden sm:block" />
            매일매일 안심할 수 있는 하루를 선물합니다.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="flex flex-col sm:flex-row gap-3 items-start"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(83, 119, 204, 0.32)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 px-8 py-[14px] rounded-xl text-white font-semibold text-[15px] transition-all"
              style={{
                backgroundColor: '#5377CC',
                boxShadow: '0 8px 24px rgba(83, 119, 204, 0.25)',
              }}
            >
              따뜻한 동행 시작하기
              <ArrowRight size={17} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(83, 119, 204, 0.06)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-[14px] rounded-xl font-semibold text-[15px] border transition-all"
              style={{ color: '#5377CC', borderColor: 'rgba(83,119,204,0.35)', backgroundColor: 'transparent' }}
            >
              서비스 자세히 보기
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F8FAFC)', zIndex: 20 }}
      />
    </section>
  );
}
