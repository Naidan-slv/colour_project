import colorNames from "colornames";

const Input = ({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name : </label>
        <input
            autoFocus
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
                // will translate the name of the color to a hex value and then set that hex value to our new state
            }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        
    </form>
  )
}

export default Input