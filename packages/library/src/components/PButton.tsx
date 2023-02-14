export interface PButtonProps {
  label: string;
  onClick: () => void;
}

export function PButton(props: PButtonProps) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "blue", color: "red" }}
    >
      {props.label}
    </button>
  );
}
