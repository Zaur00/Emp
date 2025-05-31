import React from "react";
import "../CSS/ColorSelector.css"; // Ensure you have this CSS file for styling 
const ColorSelector = ({ colors, selectedColor, onSelect }) => {
    return (
        <div className="color-selector">
            {colors.map(color => (
                <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? "selected" : ""}`}
                    onClick={() => onSelect(color)}
                    style={{
                        backgroundColor: color.toLowerCase(),
                        border: selectedColor === color ? "2px solid black" : "1px solid #ccc",
                    }}
                >
                    
                </button>
            ))}
        </div>
    );
};

export default ColorSelector;
