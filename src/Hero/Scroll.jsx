import scroll from "../assets/scroll/scroll.svg";

function Scroll() {
  return (
    <div className="scroll">
      <div className="scroll-text">
        S{"  "}C{"  "}R{"  "}O{"  "}L{"  "}L
      </div>
      <div>
        <img className="scroll-line" src={scroll} alt="scroll" />
      </div>
    </div>
  );
}

export default Scroll;
