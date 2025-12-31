import type {  Introduction} from "@/pages/Projects/data"
interface TitlePtops{
    introduction: Introduction
}


const Title:React.FC<TitlePtops> = ({introduction}) => {
    return(
    <section className="bg- min-h-96 p-5 flex flex-col gap-y-5 md:justify-between md:flex-row md:px-28 text-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row gap-y-8 md:gap-x-12">
            <img src={introduction?.image} alt={introduction?.title} className="w-80 md:w-100 md:order-2"/>
            <div className="md:mr-10">
                <h1 className="text-3xl md:text-4xl font-bold">{introduction?.title}</h1>
            <p className="text-muted-foreground mt-2">{introduction?.overview}</p>
            <p className="text-sm font-bold text-muted-foreground mt-1"><span>{introduction?.industry}</span></p>
            </div>
        </div>
    </section>
  )
}

export default Title
