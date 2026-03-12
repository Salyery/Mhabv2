import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { UserCheck, Users, MessageSquare, Settings, Calendar, BookOpen, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';

const roadmapPhases = [
  {
    phase: 'Этап 0',
    date: 'Очень ждем',
    title: 'Ваше подтверждение и сбор команды',
    description: 'Вы говорите «хотим» и выбираете контур для тестирования',
    icon: UserCheck,
    gradientClasses: "from-blue-400 to-cyan-400"
  },
  {
    phase: 'Этап 1',
    date: '23.03–03.04',
    title: 'Обучение и тестирование',
    description: 'Работа на реальных (тестовых) медиапланах',
    icon: Users,
    gradientClasses: "from-blue-400 to-purple-400"
  },
  {
    phase: 'Этап 2',
    date: 'Скоро',
    title: 'Сбор обратной связи',
    description: 'Анализ опыта использования и доработка функционала',
    icon: MessageSquare,
    gradientClasses: "from-purple-400 to-pink-400"
  },
  {
    phase: 'Этап 3',
    date: 'Скоро',
    title: 'Планирование переноса',
    description: 'Перенос производственного процесса в MediaHUB',
    icon: Settings,
    gradientClasses: "from-pink-400 to-orange-400"
  },
];

const supportItems = [
  { icon: BookOpen, title: 'Инструкции', description: 'Подробная документация по работе с системой', delay: 0.1, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', glow: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Users, title: 'Запись обучения', description: 'Видеоматериалы для быстрого старта', delay: 0.2, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', glow: 'from-purple-500/20 to-pink-500/20' },
  { icon: MessageSquare, title: 'Сопровождение в Telegram', description: 'Оперативная поддержка в чате', delay: 0.3, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20', glow: 'from-pink-500/20 to-rose-500/20' },
  { icon: Headphones, title: 'Поддержка DI', description: 'Техническая помощь от команды разработки', delay: 0.4, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20', glow: 'from-cyan-500/20 to-blue-500/20' },
];

export function Roadmap() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      const timeoutIds: NodeJS.Timeout[] = [];
      
      const startDelay = setTimeout(() => {
        roadmapPhases.forEach((_, i) => {
          const id = setTimeout(() => {
            setActiveIndex(i);
          }, i * 600);
          timeoutIds.push(id);
        });
        
        // Сбросить свечение после последней карточки
        const finalId = setTimeout(() => {
          setActiveIndex(null);
        }, roadmapPhases.length * 600 + 400);
        timeoutIds.push(finalId);
      }, 600); // пауза после появления блока
      
      timeoutIds.push(startDelay);
      return () => timeoutIds.forEach(clearTimeout);
    }
  }, [isInView]);

  return (
    <section id="roadmap" className="relative py-32 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">План внедрения</span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Маршрут в{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              технологическое будущее
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Прозрачный и понятный процесс интеграции платформы в ваши бизнес-процессы
          </p>
        </motion.div>

        {/* Phases — 4 cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 relative">
          
          {/* Timeline connecting line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-white/10 z-0" />
          
          {roadmapPhases.map((phase, i) => {
            const isLit = activeIndex === i;
            
            return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative pt-12"
            >
              {/* Timeline dot and line indicator */}
              <div className={`absolute top-0 left-6 w-0.5 h-12 transition-colors lg:hidden ${isLit ? 'bg-white/20' : 'bg-white/10'} group-hover:bg-white/20`} />
              
              {/* Desktop timeline node */}
              <div className={`hidden lg:flex absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 z-10 transition-colors items-center justify-center ${isLit ? 'border-white' : 'border-gray-600'} group-hover:border-white`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.gradientClasses} transition-opacity ${isLit ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`} />
              </div>

              <div className={`relative p-7 rounded-3xl transition-all duration-500 h-full flex flex-col border ${isLit ? 'bg-white/[0.04] border-white/15' : 'bg-white/[0.02] border-white/5'} hover:bg-white/[0.04] hover:border-white/15`}>
                {/* Vertical accent */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-gradient-to-b ${phase.gradientClasses} transition-all duration-500 ${isLit ? 'opacity-100 h-3/4' : 'opacity-30 h-1/2'} group-hover:opacity-100 group-hover:h-3/4`} />
                
                {/* Header: Badge & Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${phase.gradientClasses}`}>
                    {phase.phase}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className={`w-3.5 h-3.5 transition-colors ${isLit ? 'text-gray-400' : 'text-gray-500'} group-hover:text-gray-400`} />
                    <span className={`text-sm font-medium transition-colors ${isLit ? 'text-gray-400' : 'text-gray-500'} group-hover:text-gray-400`}>{phase.date}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-5 relative overflow-hidden transition-transform duration-500 ${isLit ? 'scale-110' : 'scale-100'} group-hover:scale-110`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradientClasses} transition-opacity ${isLit ? 'opacity-20' : 'opacity-10'} group-hover:opacity-20`} />
                  <phase.icon className="w-6 h-6 text-white relative z-10" />
                </div>

                {/* Content */}
                <h4 className={`text-lg font-medium mb-3 transition-all ${isLit ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400`}>{phase.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{phase.description}</p>
              </div>
            </motion.div>
          )})}
        </div>

        {/* "Вы получаете" block */}
        <div className="relative p-10 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden">
          {/* Ambient color blurs inside the container */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center gap-4 mb-12 justify-center"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Вы получаете на каждом этапе</h3>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Soft gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative ${item.bg} border group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <item.icon className={`w-7 h-7 ${item.color} relative z-10`} />
                </div>
                <h5 className="text-lg font-medium text-white mb-3 relative z-10">{item.title}</h5>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
