import { memo } from "react"

const ServiceItem=(prop)=>{
    return(
        <div className="service-container">
        <div className="media">
            <img src={`${prop.image}`} alt="" />
            <div>
                <p className='title'>{prop.title}</p>
                <p className='desc'>{prop.description}</p>
            </div>
        </div>
    </div>
    )
}
export default memo(ServiceItem)