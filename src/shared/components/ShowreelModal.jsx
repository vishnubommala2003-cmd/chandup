import React from 'react';
import { useModal } from '../../contexts/ModalContext';

export default function ShowreelModal() {
  const { isShowreelOpen, closeShowreelModal } = useModal();

  if (!isShowreelOpen) return null;

  return (
    <div
      id="showreel-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={(e) => {
        if (e.target.id === 'showreel-modal') closeShowreelModal();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#141311] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
          <div className="text-xs tracking-[0.2em] uppercase text-white/70">
            CALDREN SHOWREEL — ARCHITECTURAL SPACES
          </div>
          <button
            id="close-showreel-btn"
            onClick={closeShowreelModal}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            ✕
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://framerusercontent.com/images/qGgfjkIwBKkllvcImC85cBkUK3o.png"
            alt="Showreel Film Poster"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
            <div className="w-16 h-16 rounded-full bg-[#bfa181] text-black flex items-center justify-center shadow-lg transform transition hover:scale-105 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white font-serif italic text-2xl sm:text-3xl text-center px-4">
              Aurelia Residences & Private Portfolios
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">4K Cinematic Showcase · 01:45</p>
          </div>
        </div>
      </div>
    </div>
  );
}
