import ProjectCard from "../Components/ProjectCard";

function Home() {
    return (
        <div className="mx-80">
            <div className="bg-white py-5 drop-shadow-xl">
                <h1 className="text-4xl ml-20 mt-5">Tervetuloa.</h1>
                <p className="text-xl mx-10 mt-5">Olen motivoitunut ja intohimoinen web-ohjelmistokehittäjä Oulusta.
                Tavoitteeni on opetella web-kehitystä monipuolisesti, sekä front- että backend-puolelta.
                Opetellessani nettisivujen tekoa itsenäisesti jo 2 vuotta, olen hankkinut perustiedot nettisivujen luomisesta.<br/>
                Nyt opiskellessani OSAO:ssa ohjelmistokehittäjäksi, olen saanut syventää tietojani ja oppinut uusia tekniikoita ja työkaluja.<br/><br/>
                Haluan jatkaa opiskelua ja kehittymistäni web-ohjelmistokehittäjänä ja pyrin tekemään laadukkaita ja toimivia sovelluksia sekä asiakkaille että itselleni.</p>
            </div>
            <div className="bg-slate-200 w-full p-3 flex gap-5">
            <ProjectCard name="Travelling line" image="travellingline" />
            <ProjectCard name="Snake game" image="snakegame" />
            </div>
        </div>
    );
}

export default Home;