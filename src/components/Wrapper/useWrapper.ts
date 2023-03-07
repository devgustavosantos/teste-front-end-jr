type UseWrapperProps = {
  firstClassName: string;
  secondClassName?: string;
};

export function useWrapper({
  firstClassName,
  secondClassName,
}: UseWrapperProps) {
  const finalClassName = secondClassName
    ? `${firstClassName} ${secondClassName}`
    : firstClassName;

  return { finalClassName };
}
