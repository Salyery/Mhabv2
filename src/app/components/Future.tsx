import { motion } from "motion/react";
import {
  Radio,
  Tv,
  Monitor,
  BarChart4,
  Layers,
  TrendingUp,
  Sparkles,
  Plus,
} from "lucide-react";

// Кастомная иконка рекламного щита
const Billboard = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="2" width="12" height="16" rx="2" />
    <path d="M12 18v4" />
    <path d="M8 22h8" />
  </svg>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
  gradientClasses,
}: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="group relative flex gap-5 p-5 bg-white/[0.04] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
  >
    <div
      className={`absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-1 rounded-r-full bg-gradient-to-b ${gradientClasses} opacity-50 group-hover:opacity-100 group-hover:h-3/4 transition-all duration-300`}
    />

    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-10 group-hover:opacity-20 transition-opacity`}
      />
      <Icon className="w-6 h-6 text-white relative z-10" />
    </div>

    <div>
      <h4 className="text-lg font-medium text-white mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const ChannelIcon = ({
  icon: Icon,
  name,
  color,
  delay,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="group relative p-6 bg-white/[0.04] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-center flex flex-col items-center justify-center"
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <Icon className={`w-7 h-7 ${color} relative z-10`} />
    </div>
    <div className="font-medium text-gray-200 group-hover:text-white transition-colors">
      {name}
    </div>
  </motion.div>
);

export function Future() {
  return (
    <section id="future" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">
              Вектор развития
            </span>
          </div>
          <h2
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold"
            style={{ letterSpacing: "-0.02em" }}
          >
            Что{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              дальше?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Будущее MediaHUB: расширение на новые каналы и сбор
            <br />
            мульти-медиаразмещения в одном окне
          </p>
        </motion.div>

        {/* === ROADMAP === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* OOH */}
            <div className="relative text-center px-8 py-10">
              {/* Вертикальная циановая линия слева */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent" />

              <span className="inline-block px-5 py-1.5 rounded-full text-sm bg-white/5 backdrop-blur-sm text-blue-400 border border-blue-500/50 mb-6">
                Сегодня
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                OOH
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Бесшовный процесс взаимодействия агентства и
                клиента в OOH-кампаниях.
              </p>
            </div>

            {/* Multi-media */}
            <div className="relative text-center px-8 py-10">
              {/* Вертикальная фиолетовая линия слева */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent" />

              <span className="inline-block px-5 py-1.5 rounded-full text-sm bg-white/5 backdrop-blur-sm border border-purple-500/50 mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  До конца 2026 года
                </span>
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Multi-media
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Управление мульти-медиаразмещением в одном окне.
              </p>
            </div>
          </div>
        </motion.div>

        {/* === До конца года — подключение + Результат === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative mb-16">
          {/* Channels Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden flex flex-col"
          >
            {/* Subtle glow background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <Plus className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  До конца года - подключение
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 flex-1">
                <ChannelIcon
                  icon={Radio}
                  name="Радио"
                  color="text-blue-400"
                  delay={0.1}
                />
                <ChannelIcon
                  icon={Billboard}
                  name="НСТ"
                  color="text-purple-400"
                  delay={0.2}
                />
                <ChannelIcon
                  icon={Monitor}
                  name="Digital"
                  color="text-pink-400"
                  delay={0.3}
                />
                <ChannelIcon
                  icon={Tv}
                  name="ТВ"
                  color="text-green-400"
                  delay={0.4}
                />
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden flex flex-col"
          >
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Результат
                </h3>
              </div>

              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <FeatureCard
                  icon={Layers}
                  title="Сводное мультиразмещение"
                  description="Все каналы в одном интерфейсе"
                  gradientClasses="from-purple-400 to-pink-400"
                  delay={0.1}
                />
                <FeatureCard
                  icon={BarChart4}
                  title="Сводные дашборды"
                  description="Комплексная аналитика по всем медиа"
                  gradientClasses="from-purple-400 to-pink-400"
                  delay={0.2}
                />
                <FeatureCard
                  icon={TrendingUp}
                  title="Единый прекампейн"
                  description="Централизованное планирование"
                  gradientClasses="from-purple-400 to-pink-400"
                  delay={0.3}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}