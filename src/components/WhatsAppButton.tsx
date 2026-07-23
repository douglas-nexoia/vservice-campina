import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PHONE = "5583991908583";
const AGENT_NAME = "VService";
const DEFAULT_MESSAGE = "Olá! Vi o site da VService Campina e gostaria de um orçamento para minha cozinha.";
const NOTIFICATION_DELAY_MS = 6000;
const NOTIFICATION_AUTOHIDE_MS = 12000;
const WIGGLE_INTERVAL_MS = 15000;
const SESSION_KEY = "wa_notified_v2";

const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

const WhatsAppButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [unread, setUnread] = useState(0);
  const [wiggle, setWiggle] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  // Notificação automática (1x por sessão)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const showTimer = window.setTimeout(() => {
      setShowNotification(true);
      setUnread(1);
      sessionStorage.setItem(SESSION_KEY, "1");
      hideTimerRef.current = window.setTimeout(
        () => setShowNotification(false),
        NOTIFICATION_AUTOHIDE_MS,
      );
    }, NOTIFICATION_DELAY_MS);

    return () => {
      clearTimeout(showTimer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Wiggle periódico
  useEffect(() => {
    const id = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 800);
    }, WIGGLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const clearNotification = () => {
    setShowNotification(false);
    setUnread(0);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleDismissNotification = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clearNotification();
  };

  return (
    <>
      {/* Balão de notificação — link <a> para GTM capturar wa.me */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-28 right-6 z-50 max-w-[280px]"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={clearNotification}
              className="relative block w-full bg-card border border-border rounded-2xl rounded-br-sm shadow-xl px-4 py-3 pr-9 text-left hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              aria-label="Abrir conversa no WhatsApp"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-whatsapp flex items-center justify-center">
                  <MessageCircle size={14} className="text-whatsapp-foreground" />
                </span>
                <p className="text-xs font-semibold text-foreground">{AGENT_NAME}</p>
                <span className="ml-auto w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
              </div>
              <p className="text-sm text-foreground leading-snug">
                Olá! 👋 Posso ajudar com seu orçamento agora?
              </p>
              <span className="absolute -bottom-1.5 right-5 w-3 h-3 bg-card border-r border-b border-border rotate-45" />
            </a>
            <button
              onClick={handleDismissNotification}
              aria-label="Fechar notificação"
              className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante — link <a> para GTM capturar wa.me */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={clearNotification}
        animate={wiggle ? { rotate: [0, -10, 10, -8, 8, 0] } : { rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center text-whatsapp-foreground shadow-[var(--shadow-whatsapp)] hover:scale-110 transition-transform animate-pulse-whatsapp"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle size={30} />

        {unread > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center border-2 border-background"
          >
            {unread}
          </motion.span>
        )}
      </motion.a>
    </>
  );
};

export default WhatsAppButton;

