import React, {useState} from "react";

function AddPostForm({ addNewPost }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
    });  //stato per tutti i campi del form , come uno oggetto vuoto 

    //funzione per gestire il cambiamento dell'input
    const handleInputChange = (event) => {
       const {name, value} = event.target; 
        setFormData ({
            ...formData, //copio l'oggetto esistente 
            [name]: value, // aggiorno il campo modificato
        });
    };

    // funzione per gestire il submit form
    const  handleSubmit = (event) => {
        // evito il refresh
        event.preventDefault();

        if (formData.title.trim() !== "") { // rimuovo gli spazi bianchi nella stringa 
            addNewPost(formData); //passo l'intero oggetto
            setFormData({title: "", image: "" }); // resetto  tutti i campi
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Inserisci il titolo del nuovo posts "
            />

            <input 
            type="text"
            name="image"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Inserisci il link dell'immagine"
            />

            <button type="submit">Aggiungi Post</button>
        </form>
    );
}

export default AddPostForm;
