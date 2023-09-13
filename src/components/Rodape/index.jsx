import Image from "next/image"

export default function Rodape(){
    return(
        <>
            <footer>
                <Image src={`/image/SVG/logo-preta.svg`} width={150} height={150} alt={`logo`}/>
            </footer>
        </>
    )
}