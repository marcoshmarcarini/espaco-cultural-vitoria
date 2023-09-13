import Rodape from "@/components/Rodape";

export default function cincoPontos(){
    return(
        <>
            <div className={`flex flex-col justify-center items-center h-screen`}>
                <video width={1280} height={720} controls>
                    <source src={`/videos/5_pontos.mp4`} type={`video/mp4`} />
                </video>
                <Rodape />
            </div>
            
            
        </>
    )
}