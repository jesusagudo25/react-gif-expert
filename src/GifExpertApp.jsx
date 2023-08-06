import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAddCategory = (newCategory) => {
        //console.log(newCategory);
        // setCategories( ['HunterXHunter', ...categories] )
        if (categories.includes(newCategory)) return;
        setCategories(cats => [ newCategory, ...cats,])
        //Aqui se puede ver que el argumento cats es el estado anterior
        //y se le agrega el nuevo elemento
        //cats se puede llamar como quiera
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories } 
                onAddCategory={event => handleAddCategory(event)}
            />
            
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}

export default GifExpertApp