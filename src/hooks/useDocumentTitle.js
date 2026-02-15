import { useEffect } from 'react';

/**
 * Custom hook to update document title based on visible section
 * Improves SEO by updating title dynamically
 */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

/**
 * Custom hook to observe section visibility and update title
 * Usage: Add to sections to auto-update page title
 */
export const useSectionObserver = (sectionId, sectionTitle) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            document.title = `${sectionTitle} - Aditya Kumar Jha | Full Stack Developer`;
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId, sectionTitle]);
};

export default useDocumentTitle;
