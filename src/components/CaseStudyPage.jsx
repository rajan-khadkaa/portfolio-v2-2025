import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa6";
import { getCaseStudy } from "../constants/case-studies";
import Footer from "../sections/Footer";

// ─── SCROLL PROGRESS BAR ───────────────────────────────────────────────────

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[0.1rem] left-0 w-full h-1.5 bg-white-200 dark:bg-black-200 z-50">
      <div
        className="h-full bg-black dark:bg-white transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// ─── SECTION RENDERERS ──────────────────────────────────────────────────────

function RenderHeading({ section }) {
  return (
    <h2
      id={section.id}
      className="font-bold text-2xl md:text-3xl tracking-tight text-black-200 dark:text-white-200 mt-14 mb-4 scroll-mt-20"
    >
      {section.text}
    </h2>
  );
}

function RenderText({ section }) {
  const paragraphs = section.content.split("\n\n").filter(Boolean);
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((para, i) => (
        <div
          key={i}
          className="text-black-400 dark:text-white-400 leading-relaxed text-base m-0 animate-fade-in"
          dangerouslySetInnerHTML={{ __html: para }}
        />
      ))}
    </div>
  );
}

function RenderImage({ section, onImageClick }) {
  if (!section.src) {
    return (
      <figure className="my-6">
        <div className="w-full aspect-video bg-white-100 dark:bg-black-100 border border-dashed border-white-200 dark:border-black-200 flex items-center justify-center">
          <span className=" text-black-400 dark:text-white-400 text-sm text-center p-4">
            {section.caption}
          </span>
        </div>
      </figure>
    );
  }

  return (
    <figure className="my-6">
      <div
        className="w-full border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 cursor-zoom-in"
        onClick={() => onImageClick(section.src)}
      >
        <img
          src={section.src}
          alt={section.alt}
          className="w-full h-auto block"
        />
      </div>
      {section.caption && (
        <figcaption className="mt-3 text-sm text-black-400 dark:text-white-400 italic text-center leading-relaxed">
          {section.caption}
        </figcaption>
      )}
    </figure>
  );
}

function RenderList({ section }) {
  if (section.listType === "ordered") {
    return (
      <ol className="flex flex-col gap-2.5 pl-6 list-decimal text-black-400 dark:text-white-400">
        {section.items.map((item, i) => (
          <li
            key={i}
            className="leading-relaxed text-base pl-1"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ol>
    );
  }

  return (
    <ul className="flex flex-col gap-2.5 pl-6 list-disc text-black-400 dark:text-white-400">
      {section.items.map((item, i) => (
        <li
          key={i}
          className="leading-relaxed text-base pl-1"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
}

function RenderBeforeAfter({ section, onImageClick }) {
  return (
    <figure className="my-6 flex flex-col gap-4">
      {/* Before/Old Mockup */}
      <div
        className="relative w-full border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 cursor-zoom-in"
        onClick={() => onImageClick(section.imageBefore)}
      >
        <img
          src={section.imageBefore}
          alt={section.beforeLabel}
          className="w-full h-auto block"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 text-white text-xs font-bold uppercase tracking-wider">
          {section.beforeLabel}
        </span>
      </div>

      {/* After/Iterated New Mockup */}
      <div
        className="relative w-full border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 cursor-zoom-in"
        onClick={() => onImageClick(section.imageAfter)}
      >
        <img
          src={section.imageAfter}
          alt={section.afterLabel}
          className="w-full h-auto block"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 text-white text-xs font-bold uppercase tracking-wider">
          {section.afterLabel}
        </span>
      </div>

      {section.caption && (
        <figcaption className="mt-2 text-xs text-black-400 dark:text-white-400 italic text-center leading-relaxed">
          {section.caption}
        </figcaption>
      )}
    </figure>
  );
}

function RenderPrinciple({ section }) {
  return (
    <div className="py-5 px-6 bg-white-50 dark:bg-black-50 border border-white-200 dark:border-black-200 border-l-4 border-l-black dark:border-l-white flex flex-col gap-1.5">
      <span className="text-xs font-bold tracking-wider text-black-200 dark:text-white-200 uppercase">
        {section.label}
      </span>
      <div
        className="text-black-400 dark:text-white-400 leading-relaxed text-sm m-0"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </div>
  );
}

function RenderReflection({ section }) {
  return (
    <div className="border-l-2 border-white-200 dark:border-black-200 pl-6 flex flex-col gap-8 mt-4">
      <p className="text-xs font-bold tracking-widest uppercase text-black-400 dark:text-white-400 m-0">
        Reflection
      </p>

      {section.items.map((item, i) => (
        <div key={i} className="flex gap-4 items-start">
          <span className="font-extrabold text-lg text-black-400 dark:text-white-400 opacity-40 shrink-0 leading-none min-w-[24px]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-base text-black-200 dark:text-white-200 m-0 leading-snug">
              {item.title}
            </p>
            <div
              className="text-black-400 dark:text-white-400 leading-relaxed text-sm m-0"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function RenderSection({ section, onImageClick }) {
  switch (section.type) {
    case "heading":
      return <RenderHeading section={section} />;
    case "text":
      return <RenderText section={section} />;
    case "image":
      return <RenderImage section={section} onImageClick={onImageClick} />;
    case "list":
      return <RenderList section={section} />;
    case "before-after":
      return <RenderBeforeAfter section={section} onImageClick={onImageClick} />;
    case "principle":
      return <RenderPrinciple section={section} />;
    case "reflection":
      return <RenderReflection section={section} />;
    default:
      return null;
  }
}

// ─── IMAGE EXPAND MODAL ─────────────────────────────────────────────────────

function ImageModal({ src, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const hasDraggedRef = useRef(false);

  const getClampedOffsets = useCallback((x, y, currentZoom) => {
    const container = containerRef.current;
    if (!container) return { x, y };

    const img = container.querySelector("img");
    const imgW = img ? img.offsetWidth : container.offsetWidth;
    const imgH = img ? img.offsetHeight : container.offsetHeight;
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    const scaledW = imgW * currentZoom;
    const scaledH = imgH * currentZoom;

    const limitRatio = 0.75;

    const minX = -viewportW * (0.5 - limitRatio) - scaledW / 2;
    const maxX = viewportW * (0.5 - limitRatio) + scaledW / 2;

    const minY = -viewportH * (0.5 - limitRatio) - scaledH / 2;
    const maxY = viewportH * (0.5 - limitRatio) + scaledH / 2;

    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y)),
    };
  }, []);

  // Clamp offsets when zoom changes
  useEffect(() => {
    if (zoom <= 1) {
      setPanOffset({ x: 0, y: 0 });
    } else {
      setPanOffset((prev) => getClampedOffsets(prev.x, prev.y, zoom));
    }
  }, [zoom, getClampedOffsets]);

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoom((z) => Math.min(z + 0.25, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoom((z) => {
      const newZoom = Math.max(z - 0.25, 0.75);
      if (newZoom <= 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleResetZoom = (e) => {
    e?.stopPropagation();
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Reset zoom and pan when image source changes
  useEffect(() => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, [src]);

  // Drag-to-pan mouse events
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasDraggedRef.current = true;
      }

      const targetX = panStartRef.current.x + dx;
      const targetY = panStartRef.current.y + dy;

      setPanOffset(getClampedOffsets(targetX, targetY, zoom));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, zoom, getClampedOffsets]);

  // Wheel and Pinch touchpad listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelEvent = (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 0.08 : -0.08;
      setZoom((z) => {
        const newZoom = Math.min(Math.max(z + factor, 0.75), 4);
        if (newZoom <= 1) {
          setPanOffset({ x: 0, y: 0 });
        }
        return newZoom;
      });
    };

    container.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    hasDraggedRef.current = false;
    if (zoom > 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      panStartRef.current = { ...panOffset };
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white select-none"
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4 md:p-6 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center border border-white/20 bg-black/40 hover:bg-white/10 hover:border-white transition-colors cursor-pointer rounded-none"
          title="Close (Esc)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div
        className="w-full h-full flex items-center justify-center p-2 pt-[60px] pb-[80px] overflow-hidden cursor-default"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          ref={containerRef}
          className={`relative max-w-full max-h-full select-none ${isDragging ? "" : "transition-transform duration-200 ease-out"}`}
          style={{
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          onMouseDown={handleMouseDown}
          onClick={(e) => {
            e.stopPropagation();
            if (hasDraggedRef.current) {
              hasDraggedRef.current = false;
              return;
            }
            setZoom((z) => {
              if (z > 1) {
                setPanOffset({ x: 0, y: 0 });
                return 1;
              } else {
                return 1.75;
              }
            });
          }}
        >
          <img
            src={src}
            alt="Modal view"
            className="max-w-[95vw] max-h-[calc(100vh-140px)] md:max-h-[calc(100vh-160px)] object-contain pointer-events-none"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <div className="flex items-center gap-3 bg-[#18181c] border border-white/10 p-2 pointer-events-auto">
          <div className="flex items-center border-r border-white/10 pr-2 gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              disabled={!hasPrev}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer rounded-none"
              title="Previous Image (Left Arrow)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              disabled={!hasNext}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer rounded-none"
              title="Next Image (Right Arrow)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 cursor-pointer rounded-none"
              title="Zoom Out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>

            <button
              onClick={handleResetZoom}
              className="px-2 h-8 flex items-center justify-center hover:bg-white/10 font-mono text-[0.75rem] cursor-pointer rounded-none"
              title="Reset Zoom"
            >
              {Math.round(zoom * 100)}%
            </button>

            <button
              onClick={handleZoomIn}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 cursor-pointer rounded-none"
              title="Zoom In"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── RELATED STUDIES ────────────────────────────────────────────────────────

function RelatedStudies({ slugs }) {
  const knownFallbacks = {
    safetrack: { title: "Safetrack", tag: "Mobile App Design" },
    hrms: { title: "HRMS", tag: "Web Application Design" },
  };

  const items = slugs.map((slug) => {
    const fallback = knownFallbacks[slug];
    if (fallback) return { slug, ...fallback };
    return { slug, title: slug, tag: "" };
  });

  if (items.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-black-400 dark:text-white-400 mb-2">
          Related Case Studies
        </p>
        <div className="h-[1px] bg-white-200 dark:bg-black-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(({ slug, title, tag }) => (
          <a
            key={slug}
            href={`/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline group block p-6 border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 hover:bg-white-100 dark:hover:bg-black-100 transition-all duration-300 rounded-none"
          >
            <article className="flex flex-col gap-3">
              {tag && (
                <span className="inline-block px-3 py-1 border border-white-200 dark:border-black-200 text-xs font-semibold tracking-wider uppercase text-black-400 dark:text-white-400 bg-white-100 dark:bg-black-100 w-fit rounded-none">
                  {tag}
                </span>
              )}

              <p className="font-bold text-xl md:text-2xl tracking-tight text-black-200 dark:text-white-200 leading-tight m-0">
                {title}
              </p>

              <span className="text-sm font-semibold text-black-100 dark:text-white-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                View Case Study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function CaseStudyPage({ slug }) {
  const navigate = useNavigate();
  const study = useMemo(() => getCaseStudy(slug), [slug]);

  const [showFull, setShowFull] = useState(true);
  const [visible, setVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Watch document class changes to keep isDark synced
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    if (isDarkNow) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }, []);

  const toggleMode = useCallback(() => setShowFull((prev) => !prev), []);

  useEffect(() => {
    const scrollUpThreshold = 15;
    const scrollDownThreshold = 10;

    let lastY = window.scrollY;
    let accumulated = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      setShowScrollTop(currentY > 400);

      if (currentY < 50) {
        setVisible(true);
        accumulated = 0;
        lastY = currentY;
        return;
      }

      if (delta > 0) {
        // Scrolling down
        accumulated = Math.max(0, accumulated) + delta;
        if (accumulated > scrollDownThreshold) {
          setVisible(false);
          accumulated = 0;
        }
      } else if (delta < 0) {
        // Scrolling up
        accumulated = Math.min(0, accumulated) + delta;
        if (Math.abs(accumulated) > scrollUpThreshold) {
          setVisible(true);
          accumulated = 0;
        }
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const allImages = useMemo(() => {
    if (!study) return [];
    const list = [];
    if (study.heroImage) {
      list.push(study.heroImage);
    }
    study.sections.forEach((sec) => {
      if (sec.type === "image" && sec.src) {
        list.push(sec.src);
      } else if (sec.type === "before-after") {
        if (sec.imageBefore) list.push(sec.imageBefore);
        if (sec.imageAfter) list.push(sec.imageAfter);
      }
    });
    return list;
  }, [study]);

  const [activeImgIndex, setActiveImgIndex] = useState(null);

  const handleImageClick = useCallback(
    (src) => {
      const idx = allImages.indexOf(src);
      if (idx !== -1) {
        setActiveImgIndex(idx);
      }
    },
    [allImages]
  );

  if (!study) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black-200 dark:text-white-200">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 border border-black dark:border-white text-sm font-semibold uppercase tracking-wider rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
        >
          Go back home
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Floating Scroll-Aware Header Controls */}
      <button
        onClick={() => navigate("/")}
        className={`fixed top-6 left-6 z-40 size-10 flex-center border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 text-black-200 dark:text-white-200 transition-all duration-300 hover:bg-white-100 dark:hover:bg-black-100 cursor-pointer rounded-none ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
          }`}
        title="Back to Home"
      >
        <FaArrowLeft size={16} />
      </button>

      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-40 size-10 flex-center border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 text-black-200 dark:text-white-200 transition-all duration-300 hover:bg-white-100 dark:hover:bg-black-100 cursor-pointer rounded-none ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
          }`}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? <SunIcon className="size-[20px]" /> : <MoonIcon className="size-[20px]" />}
      </button>

      {/* Centered Hero Graphic Banner */}
      <div
        className="w-full relative overflow-hidden h-[25vh] md:h-[35vh] lg:h-[40vh] cursor-zoom-in bg-white dark:bg-black flex items-center justify-center border-b border-white-200 dark:border-black-200"
        onClick={() => handleImageClick(study.heroImage)}
      >
        <img
          src={study.heroImage}
          alt={`${study.title} Brand`}
          className="w-full h-full object-cover"
        />
      </div>

      <main className="bg-white dark:bg-black py-12 px-6 sm:px-8">
        {/* Main Content Wrapper */}
        <div className="max-w-[780px] mx-auto">
          {/* Eyebrow + Title */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-black-400 dark:text-white-400 mb-2">
              Case Study • {study.tag}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black-200 dark:text-white-200 mb-8 leading-tight">
              {study.title}
            </h1>
          </div>

          {/* Metadata Block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white-200 dark:border-black-200 my-8">
            <div>
              <p className="text-xs font-bold text-black-600 dark:text-white-600 uppercase tracking-widest mb-1.5">Role</p>
              <p className="text-sm font-semibold text-black-200 dark:text-white-200 leading-snug">{study.metadata.role}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-black-600 dark:text-white-600 uppercase tracking-widest mb-1.5">Duration</p>
              <p className="text-sm font-semibold text-black-200 dark:text-white-200 leading-snug">{study.metadata.duration}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-black-600 dark:text-white-600 uppercase tracking-widest mb-1.5">Tools</p>
              <p className="text-sm font-semibold text-black-200 dark:text-white-200 leading-snug">{study.metadata.tools}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-black-600 dark:text-white-600 uppercase tracking-widest mb-1.5">Type</p>
              <p className="text-sm font-semibold text-black-200 dark:text-white-200 leading-snug">{study.metadata.type}</p>
            </div>
          </div>

          <div className="text-xs font-semibold text-black-400 dark:text-white-400 mb-8">
            {study.readTime} • {study.readType}
          </div>

          {/* Summary / Full Toggle Button */}
          <div className="mb-10">
            <button
              onClick={toggleMode}
              className="py-2.5 px-6 border border-black dark:border-white text-xs font-bold tracking-widest uppercase bg-transparent text-black-200 dark:text-white-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer rounded-none"
            >
              {showFull ? "Switch to Summary" : "Read Full Case Study"}
            </button>
          </div>

          <div className="h-[1px] bg-white-200 dark:bg-black-200 my-8" />

          {/* Content Body */}
          <div className="transition-opacity duration-300">
            {!showFull ? (
              /* Summary Mode */
              <div className="p-8 bg-white-50 dark:bg-black-50 border border-white-200 dark:border-black-200">
                <p className="text-xs font-bold tracking-widest uppercase text-black-400 dark:text-white-400 mb-4">
                  Summary
                </p>
                <div
                  className="text-black-400 dark:text-white-400 leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: study.summary }}
                />
                <div className="mt-8 pt-4 border-t border-white-200 dark:border-black-200">
                  <button
                    onClick={() => setShowFull(true)}
                    className="p-0 border-0 bg-transparent text-black-200 dark:text-white-200 font-bold text-base hover:opacity-80 cursor-pointer transition-opacity duration-200 flex items-center gap-1.5 underline rounded-none"
                  >
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ) : (
              /* Full Case Study Mode */
              <div className="flex flex-col gap-6">
                {study.sections.map((section, i) => (
                  <RenderSection
                    key={i}
                    section={section}
                    onImageClick={handleImageClick}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Related studies */}
          <RelatedStudies slugs={study.relatedSlugs} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Zoom Modal */}
      {activeImgIndex !== null && (
        <ImageModal
          src={allImages[activeImgIndex]}
          onClose={() => setActiveImgIndex(null)}
          onPrev={() => setActiveImgIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
          onNext={() => setActiveImgIndex((prev) => (prev !== null && prev < allImages.length - 1 ? prev + 1 : prev))}
          hasPrev={activeImgIndex > 0}
          hasNext={activeImgIndex < allImages.length - 1}
        />
      )}

      {/* Back to Top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 size-10 flex-center border border-white-200 dark:border-black-200 bg-white-50 dark:bg-black-50 text-black-200 dark:text-white-200 transition-all duration-300 hover:bg-white-100 dark:hover:bg-black-100 cursor-pointer rounded-none shadow-md ${showScrollTop && visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    </>
  );
}
