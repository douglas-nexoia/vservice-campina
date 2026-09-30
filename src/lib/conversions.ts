/**
 * Módulo de Conversões e Rastreamento OCT (Offline Conversion Tracking)
 * Cliente: VService (Campina Grande / PB)
 * Conta Google Ads: 611-000-5915
 * Google Tag ID: AW-18313723104
 * Ação de Conversão WhatsApp: AW-18313723104/C7YaCOSj9NEcEOD51JxE
 * Endpoint OCT: https://hrobytuiaxoflsezgpce.supabase.co/functions/v1/registrar-clique-ads
 * Prefixo de Protocolo: VS (#VS-XXXX)
 */

export const COMPANY_NAME = "VService Assistência Técnica";
export const COMPANY_LOCATION = "Campina Grande / PB";
export const WHATSAPP_NUMBER = "5583988891689";
export const DISPLAY_WHATSAPP = "(83) 98889-1689";
export const DISPLAY_PHONE = "(83) 98889-1689";
export const TEL_LINK = "tel:+5583988891689";

export const GOOGLE_ADS_ID = "AW-18313723104";
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-18313723104/C7YaCOSj9NEcEOD51JxE";

export const ENDPOINT_REGISTRO_CLIQUE =
  "https://hrobytuiaxoflsezgpce.supabase.co/functions/v1/registrar-clique-ads";

export const EMPRESA_PREFIX = "VS";

export type ServiceType =
  | "home"
  | "lavaESeca"
  | "lavaLoucas"
  | "coifasComerciais"
  | "geladeira";

export const WHATSAPP_MESSAGES: Record<ServiceType, string> = {
  home: "Olá! Vim pelo site, gostaria de um atendimento para cooktop, forno ou coifa com a VService.",
  lavaESeca: "Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava e Seca ou Lavadora com a VService.",
  lavaLoucas: "Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava-Louças com a VService.",
  coifasComerciais: "Olá! Vim pelo site, gostaria de um atendimento para coifa ou sistema de exaustão comercial com a VService.",
  geladeira: "Olá! Vim pelo site, gostaria de um atendimento para conserto de Geladeira ou Freezer com a VService.",
};

export const DEFAULT_WHATSAPP_MESSAGE = WHATSAPP_MESSAGES.home;

export interface TrafficAttribution {
  codigo: string; // Ex: #VS-ABCD
  gclid: string | null;
  wbraid: string | null;
  gbraid: string | null;
  timestamp: string;
}

// Alfabeto Base32 sem ambiguidade (31 caracteres: sem 0/O, 1/I/L)
const CHARSET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 30): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getGclAwCookie(): string | null {
  const raw = getCookie("_gcl_aw");
  if (!raw) return null;
  const parts = raw.split(".");
  return parts.length >= 3 ? parts.slice(2).join(".") : raw;
}

export function generateProtocolCode(): string {
  let randomPart = "";
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * CHARSET.length);
    randomPart += CHARSET[index];
  }
  return randomPart;
}

const STORAGE_KEY = "vservice_traffic_attr";

export function getTrafficAttribution(): TrafficAttribution | null {
  if (typeof window === "undefined") return null;

  let storedJson = sessionStorage.getItem(STORAGE_KEY);
  if (!storedJson) {
    storedJson = getCookie(STORAGE_KEY);
  }

  let stored: TrafficAttribution | null = null;
  if (storedJson) {
    try {
      stored = JSON.parse(storedJson);
    } catch {
      stored = null;
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const currentGclid = urlParams.get("gclid") || getGclAwCookie();
  const currentWbraid = urlParams.get("wbraid");
  const currentGbraid = urlParams.get("gbraid");

  const hasNewAdsParam = Boolean(currentGclid || currentWbraid || currentGbraid);

  if (hasNewAdsParam) {
    const isDifferent =
      !stored ||
      (currentGclid && stored.gclid !== currentGclid) ||
      (currentWbraid && stored.wbraid !== currentWbraid) ||
      (currentGbraid && stored.gbraid !== currentGbraid);

    if (isDifferent) {
      stored = {
        codigo: `#${EMPRESA_PREFIX}-${generateProtocolCode()}`,
        gclid: currentGclid || (stored ? stored.gclid : null),
        wbraid: currentWbraid || (stored ? stored.wbraid : null),
        gbraid: currentGbraid || (stored ? stored.gbraid : null),
        timestamp: new Date().toISOString(),
      };
      const jsonToSave = JSON.stringify(stored);
      sessionStorage.setItem(STORAGE_KEY, jsonToSave);
      setCookie(STORAGE_KEY, jsonToSave, 30);
    }
  } else if (!stored) {
    stored = {
      codigo: `#${EMPRESA_PREFIX}-${generateProtocolCode()}`,
      gclid: null,
      wbraid: null,
      gbraid: null,
      timestamp: new Date().toISOString(),
    };
    const jsonToSave = JSON.stringify(stored);
    sessionStorage.setItem(STORAGE_KEY, jsonToSave);
    setCookie(STORAGE_KEY, jsonToSave, 30);
  }

  return stored;
}

export function getWhatsAppUrl(
  service: ServiceType = "home",
  customText?: string
): string {
  const baseMessage =
    customText || WHATSAPP_MESSAGES[service] || DEFAULT_WHATSAPP_MESSAGE;
  const attribution = getTrafficAttribution();

  let finalMessage = baseMessage;
  if (attribution?.codigo) {
    const cleanCode = attribution.codigo.replace(/^#[A-Z]+-/, "");
    finalMessage = `${baseMessage} Protocolo: #${EMPRESA_PREFIX}-${cleanCode}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
}

export function sendClickRegistration(attr: TrafficAttribution): void {
  if (typeof window === "undefined" || !attr) return;

  const cleanCode = attr.codigo.replace(/^#[A-Z]+-/, "");

  const payload = {
    empresa: EMPRESA_PREFIX,
    codigo: cleanCode,
    gclid: attr.gclid,
    wbraid: attr.wbraid,
    gbraid: attr.gbraid,
    url_origem: window.location.href,
    user_agent: navigator.userAgent,
    criado_em: new Date().toISOString(),
  };

  const payloadStr = JSON.stringify(payload);
  let sent = false;

  // 1. sendBeacon com string direta: enviado como text/plain sem preflight OPTIONS
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    try {
      sent = navigator.sendBeacon(ENDPOINT_REGISTRO_CLIQUE, payloadStr);
    } catch {
      sent = false;
    }
  }

  // 2. fetch com keepalive: true e Content-Type text/plain (sem headers customizados que gerem OPTIONS)
  if (!sent && typeof fetch !== "undefined") {
    try {
      fetch(ENDPOINT_REGISTRO_CLIQUE, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: payloadStr,
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Ignora erro para nunca travar a navegação do usuário
    }
  }
}

export function handleWhatsAppClick(
  service: ServiceType = "home",
  customText?: string
): void {
  const attr = getTrafficAttribution();
  if (attr) {
    sendClickRegistration(attr);
  }

  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    try {
      (window as any).gtag("event", "conversion", {
        send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
      });
    } catch {}
  }
}

export function reportarConversaoTelefone(): void {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    try {
      (window as any).gtag("event", "conversion", {
        send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
      });
    } catch {}
  }
}
