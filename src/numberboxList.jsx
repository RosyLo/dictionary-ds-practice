const NumberBoxList = ({ section, numbers, setNumber, state }) => {
    return (
      <div className="numbersection">
            {section}
            {numbers.map((number) => {
                if(number !== 'sections') {
                    return (
                        <button
                            key={`${section}-${number}`}
                            value={number}
                            name={section}
                            disabled={state[number].includes(section) || !state[number].length ? false : true }
                            onClick={(e) => {setNumber(e.target.value, e.target.name, false)}}
                        >{number}</button>
                    )
                }
            })}
      </div>
    );
};

  export default NumberBoxList;


  