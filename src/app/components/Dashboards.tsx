import { motion } from 'motion/react';
import { BarChart3, PieChart, TrendingUp, Database, Activity, Layers, ZoomIn, X, Table, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import notificationImage from 'figma:asset/765144c43b16ded553a0cb4751434f318116651e.png';

export function Dashboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Notifications */}
        <motion.div
          id="notifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 scroll-mt-24"
        >
          <h2 className="mb-6 text-center text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Уведомления</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Все участники получают email-уведомления о смене статусов и этапов
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative cursor-pointer max-w-4xl mx-auto"
            onClick={() => setSelectedImage(notificationImage)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <img
                src={notificationImage}
                alt="Пример email-уведомления MediaHUB"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-6 h-6" />
                  <span className="font-medium">Увеличить</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">Пример email-уведомления о смене статуса</p>
          </motion.div>
        </motion.div>

        {/* Dashboards */}
        <motion.div
          id="dashboards"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scroll-mt-24"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase">Аналитика</span>
            </div>
          </div>
          <h2 className="mb-6 text-center text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Дашборды</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Преднастроенные своды, автоматические дашборды и единая структурированная база данных — чтобы анализировать без дополнительных действий
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Table,
                title: 'Преднастроенные своды',
                description: 'Готовые аналитические разрезы по всем параметрам кампаний',
              },
              {
                icon: BarChart3,
                title: 'Автоматические дашборды',
                description: 'Единая логика, единые источники данных, прозрачность статусов',
              },
              {
                icon: Database,
                title: 'Единая база данных',
                description: 'Структурированное хранение всей информации о кампаниях',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <item.icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Dashboard visualization */}
          <div className="p-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chart 1 */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold">Статусы кампаний</h4>
                  <PieChart className="w-5 h-5 text-purple-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Согласовано', value: 45, color: 'bg-green-500' },
                    { label: 'На согласовании', value: 30, color: 'bg-yellow-500' },
                    { label: 'В работе', value: 15, color: 'bg-blue-500' },
                    { label: 'Отклонено', value: 10, color: 'bg-red-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">{item.label}</span>
                        <span className="text-sm font-medium">{item.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart 2 */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold">Бюджет по месяцам</h4>
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-end justify-between gap-2 h-48">
                  {[65, 85, 70, 95, 80, 100].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg relative group" style={{ height: `${height}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {height}M ₽
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">М{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <p className="text-center text-blue-400 font-medium">
                Единая логика • Единые источники данных • Прозрачность «что согласовано / что в бронях / что в реализации»
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-white/10" hideClose aria-describedby={undefined}>
          <DialogTitle className="sr-only">Email-уведомление MediaHUB</DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <div className="p-8">
              <img
                src={selectedImage}
                alt="Email-уведомление MediaHUB"
                className="w-full h-auto rounded-xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
