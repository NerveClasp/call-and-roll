export type PlayerId = "player1" | "player2" | "player3" | "player4";

export type Player = {
  id: PlayerId;
  name: string;
  color: string;
  icon: string;
  position: number; // index of the cell on the board
  money: number;
  properties: { [propertyId: string]: boolean }; // dictionary of owned property ids
};

export type Cell = {
  id: string;
  label: string;
  className: string;
  icon: string;
};

export type SpecialCell = Cell & {
  type: "special";
  price?: never;
  color?: never;
  owner?: string;
};

export type PropertyCell = (Cell & {
  type: "property";
  owner?: PlayerId;
}) &
  (
    | { color: "brown"; price: 1 }
    | { color: "lightblue"; price: 1 }
    | { color: "purple"; price: 2 }
    | { color: "orange"; price: 2 }
    | { color: "red"; price: 3 }
    | { color: "lightgreen"; price: 3 }
    | { color: "darkgreen"; price: 4 }
    | { color: "darkblue"; price: 5 }
  );

export type BoardCell = SpecialCell | PropertyCell;

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
