function Contact(props) {
    return (<a href={props.link} rel="noopener noreferrer" target="_blank" className="text-xl w-auto flex gap-3 items-center invert">
      <props.icon size="40"/>
      <p>{props.name}</p>
      </a>
    
    );
  }
  
  export default Contact;
  
  