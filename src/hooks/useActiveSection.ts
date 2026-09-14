import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  scrollContainerId: string,
) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const container = document.getElementById(scrollContainerId);
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: container, threshold: 0.5 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, scrollContainerId]);

  return activeId;
}
