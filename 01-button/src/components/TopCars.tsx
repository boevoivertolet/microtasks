import React from "react";




type TopCarsType = {
    models: Array<ModelsType>

}

type ModelsType = {
    manufacturer: string
    model: string
}


export const TopCars = (props: TopCarsType) => {
    return (
        <ul>
            {props.models.map((objectFromModelsArray) =>{
                return(
                <li key={objectFromModelsArray.model}>
                    <span>{objectFromModelsArray.manufacturer} </span>
                    <span>{objectFromModelsArray.model} </span>
                </li>
                )
            })}
        </ul>
    );
}
