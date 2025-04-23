type TruncatedTextProps = {
  text: string;
  maxLength?: number;
};

export const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLength = 200,
}) => {
  const display =
    text.length > maxLength
      ? `${text.slice(0, maxLength)}...`
      : text;
  return <span>{display}</span>;
};