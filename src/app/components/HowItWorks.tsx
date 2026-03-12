import { motion } from 'motion/react';
import { FileText, MousePointer, CheckCircle, Edit3, X, ZoomIn, Sparkles, Bell, Settings, Layers, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

/* ─── Reusable subtitle component ───────────────────────── */

function SubTitle({
  icon: Icon,
  iconColor,
  gradient,
  borderColor,
  children,
}: {
  icon: any;
  iconColor: string;
  gradient: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center mb-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 120 }}
        className="flex items-center justify-center gap-4 mb-5"
      >
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${gradient} border ${borderColor} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconColor}`} />
        </div>
      </motion.div>
      <h3
        className="text-2xl md:text-3xl lg:text-4xl font-semibold"
        style={{ letterSpacing: '-0.01em' }}
      >
        {children}
      </h3>
    </motion.div>
  );
}

/* ─── Reusable description block ────────────────────────── */

function DescriptionItems({
  items,
  accentColor,
  dotColor,
  delay = 0.2,
}: {
  items: string[];
  accentColor: string;
  dotColor: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 mb-16 max-w-4xl mx-auto"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className={`w-1 h-1 rounded-full ${dotColor} shrink-0`} />}
          <span className={`text-sm md:text-base ${accentColor}`}>{item}</span>
        </span>
      ))}
    </motion.div>
  );
}

/* ─── Clickable screenshot component ────────────────────── */

function ClickableScreenshot({
  src,
  alt,
  onClick,
  className = '',
  aspect = '',
}: {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
  aspect?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13] backdrop-blur-sm hover:border-purple-500/40 transition-all shadow-2xl ${aspect}`}>
        
        {/* Top window controls bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/[0.03] border-b border-white/[0.05] flex items-center px-4 gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#ff5f56] transition-colors duration-300" />
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#ffbd2e] transition-colors duration-300 delay-75" />
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#27c93f] transition-colors duration-300 delay-150" />
          
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-2 rounded-full bg-white/5" />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5 pointer-events-none z-10" />

        <div className={`relative pt-10 ${aspect ? 'w-full h-full' : ''}`}>
          {/* Dark tint overlay — stays dark enough on hover for contrast */}
          <div className="absolute inset-0 top-10 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-10 pointer-events-none" />
          
          <ImageWithFallback
            src={src}
            alt={alt}
            className={`w-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 ${
              aspect ? 'h-full object-cover object-left-top' : 'h-auto'
            }`}
          />
        </div>

        {/* Hover overlay button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/25 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl pointer-events-auto hover:bg-black/70">
            <ZoomIn className="w-5 h-5 text-white" />
            <span className="font-medium text-sm text-white">Увеличить</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Placeholder screenshot ────────────────────────────── */

function PlaceholderScreenshot({
  label,
  onClick,
  className = '',
  aspect = 'aspect-[16/9]',
}: {
  label: string;
  onClick: () => void;
  className?: string;
  aspect?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:border-pink-500/30 transition-all shadow-xl ${aspect}`}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${label.replace(/\s/g, '')}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${label.replace(/\s/g, '')})`} />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 right-4 h-3 bg-white/5 rounded-full" />
        <div className="absolute top-10 left-4 w-1/3 h-2 bg-white/4 rounded-full" />
        <div className="absolute top-16 left-4 right-12 h-px bg-white/8" />
        <div className="absolute top-20 left-4 right-4 bottom-4 flex flex-col gap-2 py-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-3 px-1">
              <div className="w-8 h-2 bg-white/5 rounded-sm shrink-0" />
              <div className="flex-1 h-2 bg-white/3 rounded-sm" />
              <div className="w-12 h-2 bg-white/4 rounded-sm shrink-0" />
            </div>
          ))}
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5 pointer-events-none" />

        {/* Label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center pointer-events-auto">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <ZoomIn className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">{label}</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

/* ─── Sub-block 1: Операционные действия ────────────────── */

function BlockOperations({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SubTitle
          icon={Settings}
          iconColor="text-blue-400"
          gradient="from-blue-500/20 to-cyan-500/10"
          borderColor="border-blue-400/20"
        >
          <span className="text-gray-300">для</span>{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">операционных действий</span>
        </SubTitle>

        <DescriptionItems
          items={[
            'согласование',
            'хранение',
            'контроль реализации',
            'анализ адресных программ OOH в MediaHUB — прозрачный, управляемый и предсказуемый процесс',
          ]}
          accentColor="text-cyan-300/80"
          dotColor="bg-cyan-400/50"
        />

        {/* Two workflow cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Main workflow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/[0.02] border border-blue-400/10 rounded-3xl backdrop-blur-md flex flex-col"
          >
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-medium text-white/90">Общий медиаплан отображает все согласованные параметры</h4>
            </div>
            <div className="flex flex-col gap-3.5 flex-grow">
              {[
                { icon: FileText, text: 'Клиент получает ссылку для управления МП' },
                { icon: MousePointer, text: 'Открывает медиаплан' },
                { icon: Edit3, text: 'Реагирует статусами и комментариями' },
                { icon: FileText, text: 'Ожидает выполнение запрошенной корректировки' },
                { icon: CheckCircle, text: 'Согласовывает' },
                { icon: CheckCircle, text: 'Согласованные строки автоматически попадают в общий медиаплан' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl hover:bg-white/[0.04] hover:border-blue-400/20 transition-all group"
                >
                  <div className="shrink-0 w-9 h-9 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/20 rounded-full flex items-center justify-center text-xs font-medium text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Modifications workflow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 md:p-10 bg-gradient-to-br from-purple-500/5 to-pink-500/[0.02] border border-purple-400/10 rounded-3xl backdrop-blur-md flex flex-col"
          >
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-medium text-white/90">Если нужно изменить<br />размещение</h4>
            </div>
            <div className="flex flex-col gap-3.5 flex-grow">
              {[
                'Выбираются строки в ОМП',
                'Добавляется комментарий',
                'Отправляется задача агентству',
                'Процесс повторяется',
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl hover:bg-white/[0.04] hover:border-purple-400/20 transition-all group"
                >
                  <div className="shrink-0 w-9 h-9 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-400/20 rounded-full flex items-center justify-center text-xs font-medium text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:bg-purple-500/20 group-hover:scale-105 transition-all">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-purple-500/5 border border-purple-400/10 rounded-2xl shrink-0">
              <p className="text-center text-purple-200/70 font-medium text-sm">
                Больше не нужно перечислять вручную
              </p>
            </div>
          </motion.div>
        </div>

        {/* Email notification note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-cyan-400/70 shrink-0" />
          <p className="text-base md:text-lg text-gray-400">
            Все участники получают{' '}
            <button 
              onClick={() => onImageClick('https://i.ibb.co/mFJGmj79/image.jpg')}
              className="text-cyan-300/90 border-b border-dashed border-cyan-300/40 hover:border-cyan-300/90 hover:text-cyan-200 transition-colors cursor-pointer inline-flex items-center gap-1 group"
            >
              email-уведомления
              <ZoomIn className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>{' '}
            о смене статусов и этапов
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Sub-block 2: Управление размещениями ──────────────── */

function BlockPlacements({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  return (
    <section id="how-it-works-quality" className="relative py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SubTitle
          icon={Layers}
          iconColor="text-purple-400"
          gradient="from-purple-500/20 to-pink-500/10"
          borderColor="border-purple-400/20"
        >
          <span className="text-gray-300">для</span>{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">управления размещениями</span>
        </SubTitle>

        <DescriptionItems
          items={[
            'Единые статусы и единый источник правды',
            'Одна система для всех каналов и участников',
            'Минимум ручной рутины — максимум управляемости',
            'Автоматизация процессов, фокус на стратегии',
          ]}
          accentColor="text-purple-300/80"
          dotColor="bg-purple-400/50"
        />

        {/* Clickable screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <ClickableScreenshot
            src="https://i.ibb.co/HDh0bd5p/3.png"
            alt="Управление размещениями в MediaHUB"
            onClick={() => onImageClick("https://i.ibb.co/HDh0bd5p/3.png")}
          />
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-6 md:p-8 rounded-2xl border border-purple-400/10 bg-gradient-to-br from-purple-500/8 to-pink-500/5 backdrop-blur-sm text-center">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
            <p className="relative z-10 text-gray-300 text-sm md:text-base leading-relaxed">
              Для такого результата на стороне РА все проекты настраиваются под{' '}
              <span className="text-purple-300 font-medium">индивидуальную структуру команд</span> и{' '}
              <span className="text-purple-300 font-medium">РК клиента</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Sub-block 3: Принятие решений ─────────────────────── */

function BlockDecisions({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  return (
    <section id="how-it-works-precision" className="relative py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SubTitle
          icon={TrendingUp}
          iconColor="text-pink-400"
          gradient="from-pink-500/20 to-orange-500/10"
          borderColor="border-pink-400/20"
        >
          <span className="text-gray-300">для</span>{' '}
          <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">принятия решений по РК</span>
        </SubTitle>

        <DescriptionItems
          items={[
            'Единая логика',
            'Единые источники данных',
            'Прозрачность «что согласовано / что в бронях / что в реализации»',
            'Анализ финансового / медиа / форматного давления на рекламный сюжет',
          ]}
          accentColor="text-pink-300/80"
          dotColor="bg-pink-400/50"
        />

        {/* Two overlapping screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="relative mx-auto" style={{ paddingBottom: '20px' }}>
            {/* Top screenshot — shifted left */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-[92%] md:w-[85%]"
            >
              <ClickableScreenshot
                src="https://i.ibb.co/SDbdt4S4/4.png"
                alt="Дашборд аналитики размещения"
                onClick={() => onImageClick('https://i.ibb.co/SDbdt4S4/4.png')}
                aspect="aspect-[16/10] sm:aspect-[16/9]"
              />
            </motion.div>

            {/* Bottom screenshot — shifted right, overlapping */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative z-20 w-[92%] md:w-[85%] ml-auto -mt-24 sm:-mt-32 md:-mt-48 lg:-mt-56"
            >
              <ClickableScreenshot
                src="https://i.ibb.co/q3pFNBFj/5.png"
                alt="Сводная таблица решений по РК"
                onClick={() => onImageClick('https://i.ibb.co/q3pFNBFj/5.png')}
                aspect="aspect-[16/10] sm:aspect-[16/9]"
              />
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl pointer-events-none z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main export ───────────────────────────────────────── */

export function HowItWorks() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    if (src) setSelectedImage(src);
  };

  return (
    <>
      {/* Master header */}
      <div className="relative pt-24 md:pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 uppercase">Ценность для бизнеса</span>
          </motion.div>
          <h2
            className="text-3xl md:text-4xl lg:text-[56px] font-semibold mb-4"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              EXTRA PROFIT
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Sub-block 1 */}
      <BlockOperations onImageClick={handleImageClick} />

      

      {/* Sub-block 2 */}
      <BlockPlacements onImageClick={handleImageClick} />

      

      {/* Sub-block 3 */}
      <BlockDecisions onImageClick={handleImageClick} />

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-full sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[1400px] w-full p-0 bg-transparent border-none shadow-none" 
          hideClose 
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Скриншот интерфейса MediaHUB</DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2 text-white/50 hover:text-white transition-colors group"
            aria-label="Закрыть"
          >
            <X className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </button>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-2 md:p-6">
              <ImageWithFallback
                src={selectedImage}
                alt="Screenshot MediaHUB"
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}