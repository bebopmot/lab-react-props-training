function Greetings (props) {
    let greeting;

    switch (props.lang) {
      case "de":
        greeting = "Hallo";
        break;
      case "en":
        greeting = "Hello";
        break;
      case "es":
        greeting = "Hola";
        break;
      case "fr":
        greeting = "Bonjour";
        break;
      default:
        greeting = "Hello";
    }
  
    return (
      <section>
        <p>
          {greeting} {props.children}
        </p>
      </section>
    );
  }
  
  export default Greetings;