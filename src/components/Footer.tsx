import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-slate-700"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#5377CC' }}
              >
                <Heart size={18} className="text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">DementiaCare</span>
            </div>
            <p className="text-slate-400 leading-relaxed tracking-wide text-sm">
              사랑하는 가족의 매일을 지키는
              <br />
              <span className="font-semibold text-slate-300">가장 스마트하고 따뜻한 방법.</span>
            </p>
            <div className="mt-6 flex gap-3">
              {['App Store', 'Google Play'].map((store) => (
                <motion.button
                  key={store}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors tracking-wide"
                >
                  {store}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service info */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide">서비스</h4>
            <ul className="space-y-3 text-sm">
              {[
                '서비스 소개',
                '주요 기능',
                '이용 요금',
                '보호자 가이드',
                '자주 묻는 질문',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors tracking-wide hover:translate-x-0.5 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide">문의하기</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#5377CC' }} />
                <span className="tracking-wide">1588-0000 (평일 09:00 ~ 18:00)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#5377CC' }} />
                <span className="tracking-wide">support@dementiacare.kr</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#5377CC' }} />
                <span className="tracking-wide">서울특별시 강남구 테헤란로 123</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-slate-500 tracking-wide">
            © 2026 DementiaCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            {['개인정보처리방침', '서비스 이용약관', '접근성 정책'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-slate-300 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
