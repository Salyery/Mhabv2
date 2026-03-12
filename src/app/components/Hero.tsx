import { motion } from 'motion/react';
import { Zap, Shield, Crosshair, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

const values = [
  {
    icon: Zap,
    title: 'СКОРОСТЬ',
    subtitle: <>для операционных<br />действий</>,
    gradient: 'from-blue-500 to-cyan-400',
    borderColor: 'border-blue-400/30',
    bgGlow: 'from-blue-500/15 to-cyan-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Shield,
    title: 'КАЧЕСТВО',
    subtitle: <>для управления размещениями</>,
    gradient: 'from-purple-500 to-pink-400',
    borderColor: 'border-purple-400/30',
    bgGlow: 'from-purple-500/15 to-pink-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Crosshair,
    title: 'ТОЧНОСТЬ',
    subtitle: <>для принятия<br />решений по РК</>,
    gradient: 'from-pink-500 to-orange-400',
    borderColor: 'border-pink-400/30',
    bgGlow: 'from-pink-500/15 to-orange-500/10',
    iconColor: 'text-pink-400',
  },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_10%,transparent_100%)] opacity-70 pointer-events-none" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-16 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full w-32 h-32 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(139,92,246,0))',
                  'drop-shadow(0 0 40px rgba(139,92,246,0.3))',
                  'drop-shadow(0 0 20px rgba(139,92,246,0))',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="scale-[2.5] md:scale-[4.5] origin-center relative z-10"
            >
              <Logo />
            </motion.div>
          </motion.div>

          {/* Main Heading with Blur Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-10 text-[32px] md:text-5xl lg:text-7xl leading-[1.1] md:leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="font-light text-white/60">
              там, где медиапланы{' '}
              <br className="hidden sm:block" />
              становятся{' '}
            </span>
            <span className="relative inline-block">
              <span className="font-medium bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                решениями
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-[3px] md:h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full origin-left opacity-90"
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 md:mb-32 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500/80 font-medium flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
          >
            <span>на каждом уровне бренда</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-gray-700" />
            <span>для каждого уровня KPI</span>
          </motion.p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 4.1 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 md:p-10 bg-gradient-to-b from-white/10 to-white/[0.03] border ${item.borderColor} rounded-2xl backdrop-blur-sm hover:from-white/15 hover:to-white/[0.06] transition-all group`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 mx-auto bg-gradient-to-br ${item.bgGlow} rounded-xl flex items-center justify-center border ${item.borderColor}`}>
                    <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-2xl md:text-3xl mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-semibold`}
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {item.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}