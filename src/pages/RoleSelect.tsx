import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function RoleSelect() {
  const navigate = useNavigate();

  const handleSelectRole = (role: 'patient' | 'guardian') => {
    // TODO: navigate to login with role context
    console.log('Selected role:', role);
    navigate(`/${role}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ backgroundColor: '#5377CC', opacity: 0.06 }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#6B8EE8', opacity: 0.08 }}
        />
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-[15px] font-medium"
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.96 }}
      >
        <ArrowLeft size={18} />
        돌아가기
      </motion.button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 w-full max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-800 text-center mb-3"
          style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
        >
          어떤 분으로 시작하시나요?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-[16px] leading-relaxed text-center mb-14 max-w-sm"
        >
          역할에 맞게 최적화된 화면과 기능을 제공해드립니다.
        </motion.p>

        {/* Role cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
        >
          {/* 환자용 */}
          <motion.button
            onClick={() => handleSelectRole('patient')}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 20px 48px rgba(83, 119, 204, 0.22)',
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group relative flex flex-col items-center justify-center gap-5 rounded-2xl border bg-white px-8 py-12 text-left cursor-pointer overflow-hidden"
            style={{
              borderColor: 'rgba(83,119,204,0.18)',
              boxShadow: '0 4px 24px rgba(83, 119, 204, 0.08)',
            }}
          >
            {/* Top accent bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl origin-left"
              style={{ backgroundColor: '#5377CC' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            {/* Icon circle */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: 'rgba(83,119,204,0.1)' }}
            >
              <Heart size={36} style={{ color: '#5377CC' }} strokeWidth={1.8} />
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800 mb-2" style={{ letterSpacing: '-0.01em' }}>
                환자용
              </p>
              <p className="text-[14px] text-slate-400 leading-relaxed">
                음성 안내, 복약 알림, 물건 찾기 등<br />
                일상 보조 기능을 이용합니다.
              </p>
            </div>

            <div
              className="mt-1 px-5 py-2 rounded-lg text-[13px] font-semibold transition-colors"
              style={{ backgroundColor: 'rgba(83,119,204,0.08)', color: '#5377CC' }}
            >
              환자로 시작하기 →
            </div>
          </motion.button>

          {/* 보호자용 */}
          <motion.button
            onClick={() => handleSelectRole('guardian')}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 20px 48px rgba(83, 119, 204, 0.28)',
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group relative flex flex-col items-center justify-center gap-5 rounded-2xl px-8 py-12 text-left cursor-pointer overflow-hidden"
            style={{
              backgroundColor: '#5377CC',
              boxShadow: '0 8px 32px rgba(83, 119, 204, 0.30)',
            }}
          >
            {/* Subtle inner highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
            />

            {/* Icon circle */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
            >
              <Shield size={36} color="white" strokeWidth={1.8} />
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-2" style={{ letterSpacing: '-0.01em' }}>
                보호자용
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                복약 현황, 활동 기록, 알림 설정 등<br />
                모니터링 기능을 이용합니다.
              </p>
            </div>

            <div
              className="mt-1 px-5 py-2 rounded-lg text-[13px] font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            >
              보호자로 시작하기 →
            </div>
          </motion.button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={itemVariants}
          className="mt-10 text-slate-300 text-[13px] text-center"
        >
          앱 설정에서도 역할을 변경할 수 있습니다.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
