export interface PButton2Props {
  label: string;
  onClick: () => void;
}

export function PButton2(props: PButton2Props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "red", color: "white" }}
    >
      {props.label}
    </button>
  );
}
