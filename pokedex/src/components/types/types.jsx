import { useEffect, useState } from "react"

const Types = ({ type, typeTwo }) => {

    const typeOne = `/${type}.png`
    const [typeT, setTypeT] = useState()

    useEffect(() => {
        if (typeTwo != '') {
            setTypeT(`/${typeTwo}.png`)
        }
    }, [type])



    return (
        <div className="flexType">
            <img className="type" src={typeOne} />
            {typeTwo && <img className="type" src={typeT} />}
        </div>
    )


}

export default Types