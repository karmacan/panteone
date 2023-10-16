import {useEffect} from 'react';

export const useElementIntersection = (
  target, // to update useEffect pass target ref if it has one
  onIntersection,
  options = {}
) => {
  const {root = document?.body, triggerMargin = '0px', triggerThreshold = 0} = options;

  useEffect(() => {
    const targetElem = target?.current || target;

    if (!targetElem) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;

        onIntersection?.(targetElem);

        observer.unobserve(targetElem); // unobserve observed target
      },
      {
        root,
        rootMargin: triggerMargin,
        threshold: triggerThreshold, // how much target must be visible for trigger
      }
    );

    observer.observe(targetElem); // set new each time useEffect get new target
  }, [target, onIntersection, root, triggerMargin, triggerThreshold]);
};

export const useElementScroll = (target = document?.body, onScroll) => {
  const setElementScrollY = scrollY => {
    if (!target) return;

    target.scrollTop = scrollY;
  };

  const handleScroll = ev => {
    onScroll?.(Math.floor(ev.target.scrollTop));
  };

  useEffect(() => {
    target?.addEventListener('scroll', handleScroll);

    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  }, [target, onScroll]);

  return {
    setElementScrollY,
  };
};

export const useElementOutsideClick = (target, onOutsideClick) => {
  const handleDocumentClick = ev => {
    const targetElem = target?.current || target;

    if (!targetElem) return;

    !targetElem.contains(ev.target) && onOutsideClick?.(ev);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [target, onOutsideClick]);
};
