import { motion } from 'motion/react';
import { Users, FolderKanban, Target, Bell, BarChart, Eye, ZoomIn, X, PieChart, FolderOpen, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from './ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import teamManagementImage from 'figma:asset/04a800e1e96ea5fe212fc865a09d9e140603c5db.png';
import projectManagementImage from 'figma:asset/7fe523ee1f6ed9ab760bc37285950015544a0a34.png';

export function Agency() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="agency" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">Организация работы</span>
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
            Что на стороне <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">агентства?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            MediaHUB настраивается под структуру клиента
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: 'Команды', description: 'Гибкая структура команд и ролей' },
            { icon: PieChart, title: 'Сегменты', description: 'Настройка по сегментам бизнеса' },
            { icon: FolderOpen, title: 'Проекты', description: 'Управление проектами и кампаниями' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <item.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Результат:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart, title: 'Точные дашборды', description: 'Аналитика в реальном времени по всем параметрам' },
              { icon: Bell, title: 'Гибкие уведомления', description: 'Настраиваемые оповещения для каждой роли' },
              { icon: Eye, title: 'Прозрачная видимость', description: 'Продвижение кампании без «сборки по кускам»' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                    <defs>
                      <linearGradient id={`square-gradient-${i}`} x1="12" y1="6" x2="84" y2="90" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7"/>
                        <stop offset="1" stopColor="#ec4899"/>
                      </linearGradient>
                    </defs>
                    <rect 
                      x="14" 
                      y="14" 
                      width="68" 
                      height="68" 
                      rx="16" 
                      ry="16" 
                      fill={`url(#square-gradient-${i})`}
                      className="drop-shadow-lg"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className="w-8 h-8 relative z-10" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admin panel mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Сегменты проекта */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedImage(teamManagementImage)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-all h-[500px]">
              <img
                src={teamManagementImage}
                alt="Сегменты проекта в MediaHUB"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-6 h-6" />
                  <span className="font-medium">Увеличить</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="font-semibold flex items-center gap-2 text-white">
                  <PieChart className="w-5 h-5 text-blue-400" />
                  Сегменты проекта
                </h4>
                <p className="text-sm text-gray-300 mt-2">Управление командами и сегментами медиапланов</p>
              </div>
            </div>
          </motion.div>

          {/* Управление проектами */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedImage(projectManagementImage)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all h-[500px]">
              <img
                src={projectManagementImage}
                alt="Управление проектами в MediaHUB"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-6 h-6" />
                  <span className="font-medium">Увеличить</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="font-semibold flex items-center gap-2 text-white">
                  <FolderOpen className="w-5 h-5 text-purple-400" />
                  Управление проектами
                </h4>
                <p className="text-sm text-gray-300 mt-2">Список проектов с полной информацией о кампаниях</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogPortal>
          <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <DialogPrimitive.Content className="relative focus:outline-none">
              <DialogTitle className="sr-only">Скриншот панели управления MediaHUB</DialogTitle>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Скриншот панели управления MediaHUB"
                  className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                />
              )}
            </DialogPrimitive.Content>
          </div>
        </DialogPortal>
      </Dialog>
    </section>
  );
}
