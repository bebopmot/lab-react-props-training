function Random(props) {
    const { min, max } = props;
    console.log(`min: ${min}, max: ${max}`);

    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div>
       Random value between {min} and {max} is {randomInt}
      </div>
    );
  }
  
  export default Random;