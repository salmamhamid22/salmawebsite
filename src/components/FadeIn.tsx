import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

const FadeIn: React.FC<PropsWithChildren<Props>> = ({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  className,
  childClassName,
  visible = true,
  onComplete,
  children,
}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const childCount = React.Children.count(children);

  useEffect(() => {
    let targetCount = visible ? childCount : 0;

    if (targetCount === maxIsVisible) {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = targetCount > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible((prev) => prev + increment);
    }, delay);

    return () => clearTimeout(timeout);
  }, [childCount, delay, maxIsVisible, visible, transitionDuration, onComplete]);

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: maxIsVisible > i ? "none" : "translateY(20px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
};

export default FadeIn;
