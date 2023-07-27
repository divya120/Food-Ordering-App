import { resParsed } from "./Body"

const Shimmer = () =>{
    return(
        <div className="shimmer-ctn">
            {resParsed.map((restaurant, index) =>{
                return(
                    <div className="shimmer-card" key={index}>Cards</div>
                )
            })}
        </div>
    )
}

export default Shimmer;