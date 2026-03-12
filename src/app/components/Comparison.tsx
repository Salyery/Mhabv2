import { motion } from 'motion/react';
import { Check, Zap, Shield, Crosshair, Minus } from 'lucide-react';
import type { ReactNode } from 'react';

/* ─── Data ──────────────────────────────────────────────── */

interface SubSection {
  subtitle: string;
  before: string[];
  after: string[];
}

interface ComparisonBlock {
  id: string;
  icon: typeof Zap;
  title: ReactNode;
  gradient: string;
  borderColor: string;
  glowColor: string;
  iconColor: string;
  accentColor: string;
  checkColor: string;
  dotColor: string;
  subsections: SubSection[];
}

const blocks: ComparisonBlock[] = [
  {
    id: 'speed',
    icon: Zap,
    title: (
      <>
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">СКОРОСТЬ</span>{' '}
        для операционных действий
      </>
    ),
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-400/20',
    glowColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    accentColor: 'text-cyan-400',
    checkColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400/60',
    subsections: [
      {
        subtitle: 'Получение медиаплана',
        before: [
          'Excel-файлы, разные формы, множество ссылок',
          'Скачивание, переименование, перемещение',
          'Потеря времени и данных',
          'Сложно работать разным людям с одной РК (почта, мессенджеры)',
        ],
        after: [
          'Клиент и агентство работают в ОДНОМ ОКНЕ',
          'Медиаплан в Google Sheets в единой структуре',
          'Исключается дублирование / ошибки данных',
        ],
      },
      {
        subtitle: 'Обратная связь по медиаплану + новая версия + согласование',
        before: [
          'Комментарии к МП разрозненны, теряются',
          'Сложно отследить историю, нужны доп. действия',
          'Сложно давать ОС по единице МП',
          'Хранение множества версий',
          'Ошибки в RF-моделях и картах',
          'Разные версии согласованного = ошибки при запуске',
          'Неэффективный набор действий и долгий путь «договаривания»',
        ],
        after: [
          'Решение по строкам даётся «системными статусами» в 2 клика',
          'Через 3–5 минут РА получает формализованную ОС от клиента',
          'МП обновляется вместе с картой и RF-моделью',
          'Комментарии по строке и МП сохраняются (дата, автор, содержание)',
          'Все участники видят ОДИНАКОВУЮ рабочую версию МП',
          'Доработки заказываются из общего медиаплана, система статусов автоматически формирует задачу',
          'Кратная экономия времени работы с МП',
          'Уверенность в едином понимании РК и задач клиента',
        ],
      },
    ],
  },
  {
    id: 'quality',
    icon: Shield,
    title: (
      <>
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">КАЧЕСТВО</span>{' '}
        для управления размещениями
      </>
    ),
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-400/20',
    glowColor: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    accentColor: 'text-purple-400',
    checkColor: 'text-purple-400',
    dotColor: 'bg-purple-400/60',
    subsections: [
      {
        subtitle: 'Статусы бронирования конструкций OOH',
        before: [
          'Невозможно узнать статус «прямо сейчас», только по запросу',
          'Статусы приходят с задержкой',
        ],
        after: [
          'Клиент видит статусы бронирования практически онлайн',
          'Не требуется отдельный запрос в агентство',
        ],
      },
      {
        subtitle: 'Статусы реализации и анализ сюжетов',
        before: [
          'Нужно вручную переносить, очищать и агрегировать данные',
        ],
        after: [
          'Доступен самостоятельный контроль статусов сюжетов',
          'Возможен анализ по финансовым и эфирным параметрам сюжетов',
          'Стало возможным БЫСТРО управлять инвентарём и контентом',
        ],
      },
    ],
  },
  {
    id: 'precision',
    icon: Crosshair,
    title: (
      <>
        <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">ТОЧНОСТЬ</span>{' '}
        для принятия решений по РК
      </>
    ),
    gradient: 'from-pink-500/20 to-orange-500/10',
    borderColor: 'border-pink-400/20',
    glowColor: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    accentColor: 'text-pink-400',
    checkColor: 'text-pink-400',
    dotColor: 'bg-pink-400/60',
    subsections: [
      {
        subtitle: 'Актуальное размещение REAL-TIME',
        before: [
          'Итог согласованного не всегда актуален',
          'Доборы, сокращения ведутся отдельными файлами',
          'Итоговая картина актуального размещения — по запросу',
        ],
        after: [
          'Все согласованные строки автоматически попадают в общий медиаплан',
          'Клиент и РА видят актуальное размещение в режиме реального времени',
        ],
      },
      {
        subtitle: 'Анализ размещения',
        before: [
          'Формирование единой инфо-базы требует значительных ресурсов',
          'Данные разрознены, не все данные доступны',
        ],
        after: [
          'Преднастроенные своды',
          'Автоматические дашборды',
          'Единая структурированная база данных',
          'Рост скорости принятия управленческих решений на базе точных данных',
        ],
      },
    ],
  },
];

/* ─── Sub-section card ──────────────────────────────────── */

function SubSectionCard({
  sub,
  block,
  index,
}: {
  sub: SubSection;
  block: ComparisonBlock;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Sub-section title */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <h3 className="text-base md:text-lg font-medium">{sub.subtitle}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* "Before" — readable but secondary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.15 }}
          className="md:col-span-2 relative p-6 md:p-7 rounded-2xl overflow-hidden border border-rose-500/10 bg-gradient-to-br from-rose-950/30 via-rose-900/10 to-transparent"
        >
          {/* Subtle glow */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-rose-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <Minus className="w-3.5 h-3.5 text-rose-400/70" />
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-rose-400/60">Без системы</span>
            </div>
            <ul className="space-y-3">
              {sub.before.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400/40 mt-[7px] shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* "В MediaHUB" — prominent, glowing, takes more space */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.25 }}
          className={`md:col-span-3 relative p-6 md:p-8 rounded-2xl overflow-hidden border ${block.borderColor} bg-gradient-to-br ${block.gradient} backdrop-blur-xl`}
        >
          {/* Glow */}
          <div className={`absolute -top-20 -right-20 w-48 h-48 ${block.glowColor} rounded-full blur-3xl pointer-events-none`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 ${block.glowColor} rounded-full blur-3xl pointer-events-none opacity-50`} />

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                <Check className={`w-4 h-4 ${block.checkColor}`} />
              </div>
              <span className={`font-semibold ${block.accentColor} text-sm tracking-wide`}>В MediaHUB</span>
            </div>
            <ul className="space-y-3">
              {sub.after.map((point, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${block.dotColor}`} />
                  <span className="text-gray-100 text-sm leading-relaxed font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ────────────────────────────────────── */

export function Comparison() {
  return (
    <>
      {blocks.map((block, blockIndex) => (
        <div key={block.id}>
          {/* Divider between blocks */}
          

          <section
            id={block.id}
            className="relative py-24 md:py-32 px-6 scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto">
              {/* Block header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center mb-16 md:mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 120 }}
                  className="flex items-center justify-center gap-4 mb-6"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${block.gradient} border ${block.borderColor} flex items-center justify-center`}>
                    <block.icon className={`w-6 h-6 md:w-7 md:h-7 ${block.iconColor}`} />
                  </div>
                </motion.div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {block.title}
                </h2>
              </motion.div>

              {/* Sub-sections */}
              <div className="space-y-12 md:space-y-16">
                {block.subsections.map((sub, i) => (
                  <SubSectionCard key={sub.subtitle} sub={sub} block={block} index={i} />
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
