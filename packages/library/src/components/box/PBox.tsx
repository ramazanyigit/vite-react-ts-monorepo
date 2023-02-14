export interface PBox {
  label: string;
  onClick: () => void;
}

export function PBox(props: PBox) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "blue", color: "red" }}
    >
      {props.label}
    </button>
  );
}
