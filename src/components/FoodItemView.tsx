import clsx from "clsx";
import cookie from "../assets/icons/cookie.png";
import donut from "../assets/icons/donut.png";
import pieSlice from "../assets/icons/pie-slice.png";
import strawberry from "../assets/icons/strawberry.png";

export interface FoodItem {
    type: FoodType;
    id: number;
    startPos: PosArray;
    isActivated: boolean;
}

const lookup = {
    donut,
    pieSlice,
    strawberry,
    cookie,
};

type PosArray = [number, number];
type FoodType = keyof typeof lookup;
interface FoodItemProps {
    item: FoodItem;
    onClick: () => void;
}

export function FoodItemView({ item, onClick }: FoodItemProps) {
    const { type: foodType, startPos, isActivated } = item;
    const [left, top] = item.isActivated ? [50, 50] : startPos;
    const imageSource = lookup[foodType];
    return (
        <div
            onClick={onClick}
            className={clsx("foodItem", isActivated && "activated")}
            style={{ left: left + "%", top: top + "%" }}
        >
            <img src={imageSource} alt={`food item ${foodType}`} />
        </div>
    );
}
