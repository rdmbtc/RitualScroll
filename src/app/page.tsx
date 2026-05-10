"use client";

import { useState, useMemo, useEffect, useCallback, type ComponentType } from "react";
import { designStyles, type DesignStyle } from "@/lib/design-styles";
import * as Previews from "./previews";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePromptAccess } from '@/lib/use-prompt-access';
import { useAccount } from 'wagmi';
import { PromptStats } from '@/components/PromptStats';
import OnboardingTour, { shouldAutoOpenOnboarding } from "@/components/OnboardingTour";

import {
  Atom, Shapes, GraduationCap, Crown, Type, Leaf, Smile, Cpu, Building, Box,
  Wrench, Move, Gem, Palette, Sparkles, Moon, Star, Contrast, Component, Disc,
  Newspaper, Sprout, Shield, Tv, Cloud, Pen, Grid, Terminal, Music, Globe,
  HelpCircle, Sun, Copy, ExternalLink, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Icons
const SunIcon = () => <Sun size={12} strokeWidth={2} />;
const MoonIcon = () => <Moon size={12} strokeWidth={2} />;
const CopyIcon = () => <Copy size={16} strokeWidth={2} />;
const ExternalLinkIcon = () => <ExternalLink size={16} strokeWidth={2} />;
const ChevronLeft = () => <ChevronLeftIcon size={16} strokeWidth={2} />;
const ChevronRight = () => <ChevronRightIcon size={16} strokeWidth={2} />;

const isLightColor = (color: string) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  return luma > 186;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styleIcons: Record<string, any> = {
  ritual: Atom,
  bauhaus: Shapes,
  academia: GraduationCap,
  "art-deco": Crown,
  "bold-typography": Type,
  botanical: Leaf,
  claymorphism: Smile,
  cyberpunk: Cpu,
  enterprise: Building,
  "flat-design": Box,
  industrial: Wrench,
  kinetic: Move,
  luxury: Gem,
  "material-design": Palette,
  maximalism: Sparkles,
  "minimal-dark": Moon,
  "modern-dark": Star,
  monochrome: Contrast,
  "neo-brutalism": Component,
  neumorphism: Disc,
  newsprint: Newspaper,
  organic: Sprout,
  "playful-geometric": Shapes,
  professional: Shield,
  retro: Tv,
  saas: Cloud,
  sketch: Pen,
  "swiss-minimalist": Grid,
  terminal: Terminal,
  vaporwave: Music,
  web3: Globe,
};

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>(designStyles[0]);
  const [modeFilter, setModeFilter] = useState<"all" | "light" | "dark">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "sans" | "serif" | "mono">("all");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [fetchedPrompt, setFetchedPrompt] = useState<string>("");
  const [isFetchingPrompt, setIsFetchingPrompt] = useState(false);
  
  const { isConnected, address } = useAccount();
  const { 
    hasAccess, 
    purchaseAccess, 
    isPurchasing, 
    isConfirming, 
    isConfirmed,
    purchaseError,
    refetchAccess,
    promptPrice,
    isContractConfigured,
    isAccessLoading 
  } = usePromptAccess(selectedStyle.id);

  const fetchPromptContent = useCallback(async () => {
    if (!address || !selectedStyle.id) return;
    setIsFetchingPrompt(true);
    try {
      const res = await fetch(`/api/prompts/${selectedStyle.id}?address=${address}`);
      const data = await res.json();
      if (data.prompt) {
        setFetchedPrompt(data.prompt);
      } else {
        console.error('Failed to fetch prompt:', data.error);
      }
    } catch (err) {
      console.error('Error fetching prompt:', err);
    } finally {
      setIsFetchingPrompt(false);
    }
  }, [address, selectedStyle.id]);

  // Log when access changes — modal content auto-updates via hasAccess conditional render
  useEffect(() => {
    if (hasAccess && isModalOpen) {
      console.log('🎉 Access granted — modal will show prompt content');
      fetchPromptContent();
    }
  }, [hasAccess, isModalOpen, fetchPromptContent]);

  useEffect(() => {
    if (shouldAutoOpenOnboarding()) setIsOnboardingOpen(true);
  }, []);

  const handleRefreshAccess = () => {
    refetchAccess();
  };

  const filteredStyles = useMemo(() => {
    return designStyles.filter((style) => {
      if (modeFilter !== "all" && style.theme !== modeFilter) return false;
      if (typeFilter !== "all" && style.fontType !== typeFilter) return false;
      return true;
    });
  }, [modeFilter, typeFilter]);

  const currentIndex = filteredStyles.findIndex((s) => s.id === selectedStyle.id);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedStyle(filteredStyles[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredStyles.length - 1) {
      setSelectedStyle(filteredStyles[currentIndex + 1]);
    }
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(fetchedPrompt || selectedStyle.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetPrompt = () => {
    if (!isConnected) {
      alert('Пожалуйста, подключите кошелек');
      return;
    }
    
    if (!isContractConfigured) {
      alert('Контракт не настроен. Добавьте NEXT_PUBLIC_PROMPT_ACCESS_CONTRACT в .env.local');
      return;
    }
    
    setIsModalOpen(true);
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-[100dvh] md:h-screen bg-[#0d0d0d] flex-col md:flex-row">
        {/* Mobile overlay */}
        {isMenuOpen && (
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={[
            "sidebar border-white/10 flex-col",
            // Desktop
            "md:flex md:w-80 md:border-r md:static md:h-auto",
            // Mobile (drawer)
            isMenuOpen
              ? "fixed z-50 inset-y-0 left-0 w-[min(360px,85vw)] border-r flex"
              : "hidden md:flex",
          ].join(" ")}
        >
          {/* Logo */}
          <div className="p-5 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-lg font-semibold italic">
                <span className="text-white/60">ritual/</span>
                <span className="text-white">prompts</span>
              </h1>
              <p className="text-xs text-white/50 mt-2 leading-relaxed">
                Drop these prompts into any AI assistant and ship beautiful, consistent interfaces in minutes.
              </p>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden text-white/40 hover:text-white transition-colors p-2"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-white/10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40 w-10">MODE</span>
              <div className="flex gap-1">
                {(["all", "light", "dark"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setModeFilter(mode)}
                    className={`filter-btn ${modeFilter === mode ? "active" : "text-white/60 hover:text-white"}`}
                  >
                    {mode === "all" ? "All" : mode === "light" ? "Light" : "Dark"}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40 w-10">TYPE</span>
              <div className="flex gap-1">
                {(["all", "sans", "serif", "mono"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`filter-btn ${typeFilter === type ? "active" : "text-white/60 hover:text-white"}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Style List */}
          <div className="flex-1 overflow-y-auto">
            {filteredStyles.map((style, index) => (
              <div
                key={style.id}
                onClick={() => {
                  setSelectedStyle(style);
                  setIsMenuOpen(false);
                }}
                className={`sidebar-item ${selectedStyle.id === style.id ? "active" : ""}`}
              >
                <div
                  className="style-icon flex items-center justify-center"
                  style={{ backgroundColor: style.color }}
                >
                  {(() => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Icon = (styleIcons[style.id] || HelpCircle) as any;
                    const isLight = isLightColor(style.color);
                    return <Icon size={14} className={isLight ? "text-black" : "text-white"} />;
                  })()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{style.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    {style.theme === "light" ? <SunIcon /> : <MoonIcon />}
                    <span>{style.theme === "light" ? "Light" : "Dark"}</span>
                  </div>
                </div>
                <span className="text-xs text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 text-xs text-white/40 space-y-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="px-1 py-0.5 bg-white/10 rounded text-[10px]">↑↓</span>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <span className="px-1 py-0.5 bg-white/10 rounded text-[10px]">↵</span>
                open
              </span>
            </div>
            <div className="text-[11px] leading-snug text-white/35">
              Credits: @rdmnad in X, @therdm in discord
              <br />
              Created special for Ritual Community
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-4 md:px-6 py-4 bg-[#0d0d0d] border-b border-white/10">
            <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: selectedStyle.color }}
              >
                {(() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const Icon = (styleIcons[selectedStyle.id] || HelpCircle) as any;
                  const isLight = isLightColor(selectedStyle.color);
                  return <Icon size={20} className={isLight ? "text-black" : "text-white"} />;
                })()}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h2 className="text-lg font-semibold text-white">{selectedStyle.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/70 flex items-center gap-1">
                      {selectedStyle.theme === "light" ? <SunIcon /> : <MoonIcon />}
                      {selectedStyle.theme === "light" ? "Light" : "Dark"}
                    </span>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/70">
                      T {selectedStyle.fontType.charAt(0).toUpperCase() + selectedStyle.fontType.slice(1)}
                    </span>
                    <PromptStats promptId={selectedStyle.id} />
                  </div>
                </div>
                <p className="text-sm text-white/50 mt-1 md:max-w-2xl line-clamp-2 md:line-clamp-1">
                  {selectedStyle.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between md:justify-end gap-2 w-full md:w-auto">
              <div className="flex items-center gap-1">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="p-2 rounded hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-30"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex === filteredStyles.length - 1}
                  className="p-2 rounded hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-30"
                >
                  <ChevronRight />
                </button>
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsOnboardingOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm text-white/80 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 2-3 4" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Tutorial
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View the onboarding tour</p>
                </TooltipContent>
              </Tooltip>

              <button
                onClick={handleGetPrompt}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded text-sm text-white transition-colors"
              >
                <CopyIcon />
                {hasAccess ? 'View Prompt' : `Get Prompt (${promptPrice} RITUAL)`}
              </button>
              <a 
                href={`/${selectedStyle.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Open
                <ExternalLinkIcon />
              </a>
              <div className="md:ml-2">
                <ConnectButton />
              </div>
            </div>
          </header>

          {/* Preview Area */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#0d0d0d]">
            <div className="flex-1 overflow-hidden flex flex-col mx-3 my-3 md:mx-4 md:my-4">
              <div className="browser-mockup flex-1 flex flex-col overflow-hidden">
                {/* Browser Toolbar */}
                <div className="browser-toolbar flex-shrink-0">
                  <div className="browser-dots">
                    <div className="browser-dot red" />
                    <div className="browser-dot yellow" />
                    <div className="browser-dot green" />
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <button className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs text-gray-700">
                      <span
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: selectedStyle.color }}
                      />
                      {selectedStyle.name}
                    </button>
                    <button className="px-3 py-1 rounded-md text-xs text-gray-400 hover:bg-gray-100">
                      + New Tab
                    </button>
                  </div>
                </div>

                {/* URL Bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b border-gray-200 flex-shrink-0">
                  <div className="flex gap-2 text-gray-400">
                    <ChevronLeft />
                    <ChevronRight />
                  </div>
                  <div className="browser-url">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    ritual-scroll.vercel.app/{selectedStyle.id}
                  </div>
                </div>

                {/* Preview Content - scrollable */}
                <div className="flex-1 overflow-auto">
                  {(() => {
                    const componentName = selectedStyle.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Preview';
                    const previews = Previews as Record<string, ComponentType>;
                    const PreviewComponent = previews[componentName];
                    if (PreviewComponent) {
                      return <PreviewComponent />;
                    }
                    return <div className="p-8 text-white">Preview not found for {selectedStyle.id}</div>;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Prompt Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#121212] border border-white/10 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <CopyIcon /> {hasAccess ? 'Your Prompt' : 'Get Access'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors p-1"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {selectedStyle.description}
                  </p>
                </div>
                
                {isAccessLoading ? (
                  <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 p-6 rounded-lg flex items-center justify-center min-h-[200px]">
                    <div className="flex flex-col items-center gap-3">
                      <svg className="animate-spin h-8 w-8 text-white/50" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <div className="text-white/70 text-sm">Checking access status...</div>
                    </div>
                  </div>
                ) : !hasAccess ? (
                  <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-2">Unlock This Prompt</h4>
                        <p className="text-white/60 text-sm mb-4">
                          Get lifetime access to this prompt for just {promptPrice} RITUAL. 
                          Pay once, use forever.
                        </p>
                        
                        {purchaseError && (
                          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                            Error: {purchaseError.message}
                          </div>
                        )}
                        
                        {isConfirmed && (
                          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-sm">
                            ✓ Access granted! Refreshing...
                            <button
                              onClick={handleRefreshAccess}
                              className="ml-2 px-2 py-1 bg-green-500/20 hover:bg-green-500/30 rounded text-xs"
                            >
                              🔄 Refresh Now
                            </button>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-3">
                          <button
                            onClick={purchaseAccess}
                            disabled={isPurchasing || isConfirming || isConfirmed}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isPurchasing || isConfirming || isConfirmed ? (
                              <>
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                {isConfirmed ? 'Access Granted!' : isConfirming ? 'Confirming...' : 'Processing...'}
                              </>
                            ) : (
                              <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                                </svg>
                                Unlock for {promptPrice} RITUAL
                              </>
                            )}
                          </button>
                          <div className="text-xs text-white/40">
                            One-time payment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Prompt (Access Granted)
                    </h4>
                    <div className="bg-black border border-white/10 p-4 rounded-lg">
                      {isFetchingPrompt ? (
                        <div className="text-white/50 text-sm flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Fetching prompt content...
                        </div>
                      ) : (
                        <pre className="text-white/80 font-mono text-[13px] whitespace-pre-wrap leading-relaxed">
                          {fetchedPrompt || "Prompt content not loaded."}
                        </pre>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {hasAccess && (
                <div className="p-4 border-t border-white/10 bg-[#1a1a1a] flex justify-end">
                  <button
                    onClick={copyPrompt}
                    className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-all active:scale-95"
                  >
                    <CopyIcon />
                    {copied ? "Copied to Clipboard!" : "Copy Full Prompt"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <OnboardingTour open={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
      </div>
    </TooltipProvider>
  );
}
