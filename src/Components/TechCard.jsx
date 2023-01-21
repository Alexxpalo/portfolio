
function Tech(props) {
    const tech = props.tech;
    let blocks = [];
    for (let i = 0; i < tech.rating; i++) {
        blocks.push(<div key={tech.name + "a" + i} className="bg-red-500 w-1/4 shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]">&nbsp;</div>);
    }

    for (let i = 0; i < 10 - tech.rating; i++) {
        blocks.push(<div key={tech.name + "b" + i} className="bg-white w-1/4 shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]">&nbsp;</div>);
    }

    return (
    <div className="bg-white text-xl w-1/4 max-sm:w-full max-sm:p-1 flex flex-col gap-3 p-2 shadow-[0_0px_4px_rgba(0,0,0,0.6)]">
    
        <div className="text-slate-500 flex items-center"><props.icon size="40"/><p>{tech.name}</p></div>
        <div className="flex gap-1">{blocks}</div>
    </div>
    
    );
  }
  
  export default Tech;
  
  