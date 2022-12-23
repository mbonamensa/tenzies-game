

function Die(props) {

   const styles = {
        backgroundColor: props.isHeld && props.startGame ? "#59E391" : "#ffffff"
    }



    return (
        <div>
            <button onClick={props.holdDice} style={styles} className="die-face">{props.startGame ? props.value : ""}</button>
        </div>
    )
}

export default Die