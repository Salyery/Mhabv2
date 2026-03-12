import { motion } from 'motion/react';
import { 
  FileText, Users, Settings, Bell, GitBranch, 
  Layers, MonitorSmartphone, Map, Zap, TrendingDown, Heart,
  Sparkles, BarChart3, ArrowDown
} from 'lucide-react';
import { Logo } from './Logo';

const PilotCard = ({ icon: Icon, title, description, delay, gradientClasses }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="group relative flex gap-5 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
  >
    {/* Vertical accent line */}
    <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b ${gradientClasses} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
    
    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-20`} />
      <Icon className="w-6 h-6 text-white relative z-10" />
    </div>
    
    <div>
      <h4 className="text-lg font-medium text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const PillarCard = ({ icon: Icon, title, delay, gradientClasses }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    className="relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden group hover:border-white/[0.15] transition-colors flex flex-col items-center text-center h-full"
  >
    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClasses} opacity-50 group-hover:opacity-100 transition-opacity`} />
    
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden border border-white/10">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-30 group-hover:opacity-50 transition-opacity`} />
      <Icon className="w-8 h-8 text-white relative z-10" />
    </div>
    
    <h4 className="text-xl font-medium text-white/90 leading-tight">
      {title}
    </h4>
    
    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tl ${gradientClasses} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
  </motion.div>
);

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Ambient glowing orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[120px] rounded-full" />
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500 via-purple-500 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Сценарий пилота</span>
          </div>
          
          <h2 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white" style={{ letterSpacing: '-0.02em' }}>
            Это точка? Нет, это <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">запятая</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            и начало совместного пути
          </p>
        </motion.div>

        {/* Pilot Requirements */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Если вы готовы к пилоту — соберём маршрут внедрения под вашу структуру, 
              роли и текущие регламенты согласования.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 relative">
            {/* Divider for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
            
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <span className="text-blue-400 font-semibold">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">Что потребуется от вас</h3>
              </div>
              
              <PilotCard 
                icon={FileText} 
                title="1–2 тестовых медиаплана" 
                description="Реальные или близкие к производственным данные"
                gradientClasses="from-blue-400 to-cyan-400"
                delay={0.1}
              />
              <PilotCard 
                icon={Users} 
                title="Список участников и ролей" 
                description="Кто будет работать с системой и их полномочия"
                gradientClasses="from-blue-400 to-cyan-400"
                delay={0.2}
              />
              <PilotCard 
                icon={GitBranch} 
                title="Правила согласования" 
                description="Как происходит процесс согласования сейчас"
                gradientClasses="from-blue-400 to-cyan-400"
                delay={0.3}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:pl-4">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <span className="text-purple-400 font-semibold">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">Что сделаем мы</h3>
              </div>
              
              <PilotCard 
                icon={Settings} 
                title="Настроим структуру клиента" 
                description="Адаптируем систему под ваши процессы в MediaHUB"
                gradientClasses="from-purple-400 to-pink-400"
                delay={0.2}
              />
              <PilotCard 
                icon={Bell} 
                title="Подключим уведомления" 
                description="Настроим workflow и логику статусов согласно вашим регламентам"
                gradientClasses="from-purple-400 to-pink-400"
                delay={0.3}
              />
              <PilotCard 
                icon={BarChart3} 
                title="Покажем аналитику" 
                description="Сравним аналитические разрезы «как есть» и «как будет»"
                gradientClasses="from-purple-400 to-pink-400"
                delay={0.4}
              />
            </div>
          </div>
        </div>

        {/* Formula / Value Architecture Section */}
        <div className="max-w-6xl mx-auto hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 uppercase">Архитектура ценности</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
              Синергия <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MediaHUB</span>
            </h3>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 relative z-10">
            <div className="flex-1">
              <PillarCard 
                icon={Layers}
                title={<>Единое пространство<br/><span className="text-gray-400 text-sm md:text-base mt-2 block font-normal">согласования медиапланов</span></>}
                gradientClasses="from-blue-500 to-cyan-400"
                delay={0.1}
              />
            </div>

            {/* Plus indicator */}
            <div className="flex items-center justify-center shrink-0">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 bg-[#05050f]/50 backdrop-blur-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </motion.div>
            </div>

            <div className="flex-1">
              <PillarCard 
                icon={MonitorSmartphone}
                title={<>Контроль медиаразмещений<br/><span className="text-gray-400 text-sm md:text-base mt-2 block font-normal">в одном окне</span></>}
                gradientClasses="from-purple-500 to-blue-500"
                delay={0.2}
              />
            </div>

            {/* Plus indicator */}
            <div className="flex items-center justify-center shrink-0">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 bg-[#05050f]/50 backdrop-blur-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </motion.div>
            </div>

            <div className="flex-1">
              <PillarCard 
                icon={Map}
                title={<>Системное управление<br/><span className="text-gray-400 text-sm md:text-base mt-2 block font-normal">наружной рекламой</span></>}
                gradientClasses="from-pink-500 to-purple-500"
                delay={0.3}
              />
            </div>
          </div>

          {/* Connecting Flow */}
          <div className="flex justify-center my-10 relative">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-12 h-12 rounded-full bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 flex items-center justify-center text-white/70 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowDown className="w-5 h-5 relative z-10" />
            </motion.div>
          </div>

          {/* The Result Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            
            <div className="relative bg-[#05050f]/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-14 border border-white/5 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                
                <div className="flex flex-col items-center pt-8 lg:pt-0 first:pt-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                    <Zap className="w-7 h-7 text-blue-400 relative z-10" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200 mb-3 tracking-tight">
                    Выработка
                  </div>
                  <p className="text-blue-400 font-medium uppercase tracking-widest text-xs md:text-sm">Больше</p>
                </div>

                <div className="flex flex-col items-center pt-8 lg:pt-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                    <TrendingDown className="w-7 h-7 text-purple-400 relative z-10" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-200 mb-3 tracking-tight">
                    COAST
                  </div>
                  <p className="text-purple-400 font-medium uppercase tracking-widest text-xs md:text-sm">Меньше</p>
                </div>

                <div className="flex flex-col items-center pt-8 lg:pt-0 md:col-span-2 lg:col-span-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-md" />
                    <Heart className="w-7 h-7 text-pink-400 relative z-10" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-pink-200 mb-3 leading-tight">
                    Удовольствие
                  </div>
                  <p className="text-pink-400 font-medium tracking-widest text-xs md:text-sm uppercase max-w-[200px] mx-auto">
                    от эффективного<br/>размещения ООН
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 md:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 uppercase">Архитектура ценности</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
              Синергия <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MediaHUB</span>
            </h3>
          </motion.div>

          {/* Desktop Giant Hexagon Diagram */}
          <div className="hidden md:block relative w-full max-w-[400px] lg:max-w-[540px] mx-auto aspect-[1/1.1547] mt-32 mb-32 group">
            
            {/* Massive background glows for color explosion */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Main SVG Hexagon and Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              <style>
                {`
                  @keyframes lineFlow { from { stroke-dashoffset: 4; } to { stroke-dashoffset: 0; } }
                  .line-flow { animation: lineFlow 1s linear infinite; }
                `}
              </style>
              <defs>
                <linearGradient id="hexOutline" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />  {/* Cyan */}
                  <stop offset="50%" stopColor="#c084fc" /> {/* Purple */}
                  <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                </linearGradient>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Thick Colorful Hexagon Outline */}
              <motion.polygon 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                points="50,0 100,25 100,75 50,100 0,75 0,25" 
                fill="none" 
                stroke="url(#hexOutline)" 
                strokeWidth="0.6" 
                filter="url(#neonGlow)" 
              />

              {/* Animated dashed lines */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                {/* From top nodes to center */}
                <line x1="0" y1="25" x2="50" y2="50" stroke="#22d3ee" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
                <line x1="50" y1="0" x2="50" y2="50" stroke="#818cf8" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
                <line x1="100" y1="25" x2="50" y2="50" stroke="#c084fc" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
                
                {/* From center to bottom nodes */}
                <line x1="50" y1="50" x2="100" y2="75" stroke="#60a5fa" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
                <line x1="50" y1="50" x2="50" y2="100" stroke="#c084fc" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
                <line x1="50" y1="50" x2="0" y2="75" stroke="#f472b6" strokeWidth="0.4" strokeDasharray="1 3" className="line-flow" />
              </motion.g>
            </svg>

            {/* --- NODES EXACTLY AT CORNERS --- */}

            {/* 1. Top Center: Контроль размещений (50, 0) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, type: "spring" }} className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full p-[2px] bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <MonitorSmartphone className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-400" />
                </div>
              </div>
              <div className="absolute bottom-[calc(100%+12px)] lg:bottom-[calc(100%+20px)] left-1/2 -translate-x-1/2 text-center w-[200px] lg:w-[260px]">
                <h4 className="text-white font-bold text-sm lg:text-lg leading-tight">Контроль размещений</h4>
                <p className="text-indigo-200/70 text-xs lg:text-sm mt-1">в одном окне</p>
              </div>
            </motion.div>

            {/* 2. Top Right: Системное управление (100, 25) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, type: "spring" }} className="absolute top-[25%] left-[100%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full p-[2px] bg-gradient-to-br from-indigo-400 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <Map className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" />
                </div>
              </div>
              <div className="absolute left-[calc(100%+12px)] lg:left-[calc(100%+20px)] top-1/2 -translate-y-1/2 text-left w-[160px] lg:w-[220px]">
                <h4 className="text-white font-bold text-sm lg:text-lg leading-tight">Системное управление</h4>
                <p className="text-purple-200/70 text-xs lg:text-sm mt-1">наружной рекламой</p>
              </div>
            </motion.div>

            {/* 3. Bottom Right: Выработка (100, 75) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, type: "spring" }} className="absolute top-[75%] left-[100%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-blue-400" />
                </div>
              </div>
              <div className="absolute left-[calc(100%+12px)] lg:left-[calc(100%+20px)] top-1/2 -translate-y-1/2 text-left w-[140px] lg:w-[200px]">
                <div className="text-2xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 tracking-tight">Выработка</div>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] lg:text-xs mt-1">Больше</p>
              </div>
            </motion.div>

            {/* 4. Bottom Center: COAST (50, 100) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7, type: "spring" }} className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full p-[2px] bg-gradient-to-br from-blue-400 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 lg:w-7 lg:h-7 text-purple-400" />
                </div>
              </div>
              <div className="absolute top-[calc(100%+12px)] lg:top-[calc(100%+20px)] left-1/2 -translate-x-1/2 text-center w-[200px] lg:w-[260px]">
                <div className="text-2xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 tracking-tight">COAST</div>
                <p className="text-purple-400 font-bold uppercase tracking-widest text-[10px] lg:text-xs mt-1">Меньше</p>
              </div>
            </motion.div>

            {/* 5. Bottom Left: Удовольствие (0, 75) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9, type: "spring" }} className="absolute top-[75%] left-[0%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full p-[2px] bg-gradient-to-br from-purple-400 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 lg:w-7 lg:h-7 text-pink-400" />
                </div>
              </div>
              <div className="absolute right-[calc(100%+12px)] lg:right-[calc(100%+20px)] top-1/2 -translate-y-1/2 text-right w-[160px] lg:w-[220px]">
                <div className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 tracking-tight leading-tight">Удовольствие</div>
                <p className="text-pink-400 font-bold uppercase tracking-widest text-[10px] lg:text-xs mt-1 leading-tight">от эффективного<br/>размещения ООН</p>
              </div>
            </motion.div>

            {/* 6. Top Left: Единое пространство (0, 25) */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.1, type: "spring" }} className="absolute top-[25%] left-[0%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 rounded-full" />
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                  <Layers className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                </div>
              </div>
              <div className="absolute right-[calc(100%+12px)] lg:right-[calc(100%+20px)] top-1/2 -translate-y-1/2 text-right w-[160px] lg:w-[220px]">
                <h4 className="text-white font-bold text-sm lg:text-lg leading-tight">Единое пространство</h4>
                <p className="text-cyan-200/70 text-xs lg:text-sm mt-1">согласования медиапланов</p>
              </div>
            </motion.div>

            {/* CENTRAL TRANSFORMER NODE */}
            <motion.div 
              initial={{ scale: 5, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 100, damping: 20 }} 
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-60 rounded-full animate-pulse" />
              <div className="relative flex items-center justify-center w-24 h-24 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                {/* Background blocker so lines don't show through */}
                <div className="absolute inset-0 bg-[#05050f]" style={{ clipPath: 'polygon(50% 5%, 90% 25%, 90% 75%, 50% 95%, 10% 75%, 10% 25%)' }} />
                <div className="scale-[2.5] flex items-center justify-center relative z-10">
                  <Logo iconOnly={true} disableHover={true} />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Mobile Stacked View (For phones, since giant hex won't fit) */}
          <div className="md:hidden flex flex-col gap-6 relative z-10 px-4">
            
            {/* Top Half (Inputs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-5 border border-white/10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full" />
              <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Единое пространство</h4>
                  <span className="text-cyan-200/70 text-xs">согласования медиапланов</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-blue-400 to-indigo-500 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                    <MonitorSmartphone className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Контроль размещений</h4>
                  <span className="text-indigo-200/70 text-xs">в одном окне</span>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-indigo-400 to-purple-500 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                    <Map className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Системное управление</h4>
                  <span className="text-purple-200/70 text-xs">наружной рекламой</span>
                </div>
              </div>
            </motion.div>

            {/* Connector Core */}
            <div className="flex justify-center my-2 relative z-20">
              <div className="relative flex items-center justify-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-50 rounded-full animate-pulse" />
                <div className="absolute inset-2 bg-[#05050f] z-0" style={{ clipPath: 'polygon(50% 5%, 90% 25%, 90% 75%, 50% 95%, 10% 75%, 10% 25%)' }} />
                <div className="scale-[1.8] flex items-center justify-center relative z-10">
                  <Logo iconOnly={true} disableHover={true} />
                </div>
              </div>
            </div>

            {/* Bottom Half (Glass Outputs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-5 border border-white/10 rounded-3xl relative overflow-hidden mt-1"
            >
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full" />
              <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-pink-500/10 blur-[50px] rounded-full" />
              
              <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-cyan-400 to-blue-500 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200 mb-1">Выработка</div>
                  <p className="text-blue-400 text-[10px] uppercase tracking-widest font-bold">Больше</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-blue-400 to-purple-500 mb-3 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-200 mb-1">COAST</div>
                  <p className="text-purple-400 text-[10px] uppercase tracking-widest font-bold">Меньше</p>
                </div>

                <div className="col-span-2 flex flex-col items-center text-center pt-6 border-t border-white/10 relative">
                  <div className="absolute inset-0 top-0 bg-gradient-to-b from-pink-500/10 to-transparent pointer-events-none" />
                  <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-br from-purple-400 to-pink-500 mb-3 shadow-[0_0_15px_rgba(236,72,153,0.5)] z-10">
                    <div className="w-full h-full bg-[#05050f] rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-pink-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-pink-200 mb-1 z-10">Удовольствие</div>
                  <p className="text-pink-400 text-[10px] uppercase tracking-widest font-bold z-10">от эффективного размещения ООН</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
