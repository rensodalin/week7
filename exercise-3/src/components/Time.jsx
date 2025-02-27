function Time() {
    let time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    return(
        <h2>
            {time}
        </h2>
    );
}

export default Time;