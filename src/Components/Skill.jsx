
function Skill(props) {
    const skill = props.skill;
    console.log("prop" + skill.icon);
    console.log("aaaaaaaaaaaa" + props.icon);
    let blocks = [];
    for (let i = 0; i < skill.rating; i++) {
        blocks.push(<div key={skill.name + "a" + i} className="bg-red-500 w-1/4 shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]">&nbsp;</div>);
    }

    for (let i = 0; i < 10 - skill.rating; i++) {
        blocks.push(<div key={skill.name + "b" + i} className="bg-white w-1/4 shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]">&nbsp;</div>);
    }

    return (
    <div className="bg-white text-xl w-1/4 flex flex-col gap-3 p-2 shadow-[0_0px_4px_rgba(0,0,0,0.6)]">
    
        <div className="text-slate-500 flex items-center"><props.icon size="40"/><p>{skill.name}</p></div>
        <div className="flex gap-1">{blocks}</div>
    </div>
    
    );
  }
  
  export default Skill;
  
  