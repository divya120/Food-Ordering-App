import { resParsed } from "./Body"

const Shimmer = () =>{
    return(
        <div className="shimmer-ctn">
            {resParsed.map((restaurant) =>{
                return(
                    <div className="shimmer-card">Cards</div>
                )
            })}
        </div>
    )
}

export default Shimmer;