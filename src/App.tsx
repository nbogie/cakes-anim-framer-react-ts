import { useState } from "react";
import { FoodItem, FoodItemView } from "./components/FoodItemView.tsx";

function App() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState<FoodItem[]>([
        { id: 1, type: "donut", isActivated: false, startPos: [20, 0] },
        { id: 2, type: "cookie", isActivated: false, startPos: [0, 40] },
        { id: 3, type: "pieSlice", isActivated: false, startPos: [80, 100] },
        { id: 4, type: "strawberry", isActivated: false, startPos: [100, 50] },
    ]);

    function toggle(id: FoodItem["id"]) {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isActivated: !item.isActivated }
                    : item
            )
        );
    }
    return (
        <div className="app">
            {/* these FoodItemView items are laid out with position:absolute, so it only matters that we place them
            inside the app (which is the container, position:relative) */}
            <div>
                {items.map((item) => (
                    <FoodItemView
                        onClick={() => toggle(item.id)}
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <h1>React - images and css animation</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
}

export default App;
