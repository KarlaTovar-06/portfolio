import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImagePreview({ image, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Rectángulo con preview */}
      <motion.div
        onClick={() => setIsOpen(true)}
        className="relative px-4 w-full border border-negro2 bg-negro2 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-cyan transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex-1">
          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>

        {/* Preview pequeño */}
        <motion.div
          className="size-16 rounded-lg overflow-hidden flex-shrink-0 my-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Modal con imagen completa */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Botón cerrar */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Imagen completa */}
              <motion.img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />

              {/* Título en el modal */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h2 className="text-white text-2xl">{title}</h2>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
