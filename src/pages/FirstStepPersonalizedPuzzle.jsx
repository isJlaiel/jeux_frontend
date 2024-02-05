import { React, useState } from 'react'
import '../styles/PersonnalizedPuzzle.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FirstStepPersonalizedPuzzle() {
    const [people, setPeople] = useState(['', '', '']);

    const navigate = useNavigate(); 

    const handleChange = (index, event) => {
        const newPeople = [...people];
        newPeople[index] = event.target.value;
        setPeople(newPeople);
    };
    const handleAddClick = () => {
        let data = people.toString()
        data = "enum PERSON = {" + data + "}"
        axios.get(`http://localhost:8000/modelresolver/sendVariable/${data}`)
            .then(function (response) {
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
        navigate('/personnalizedPuzzle', { state: { people } }); 
    };
    return (
        <div>
            <p>Welcome to our puzzle-solving website! Currently, we have three individuals eager to embark on vacations, each opting for a different country and planning to utilize a distinct mode of transportation. We invite you to set the constraints to determine which participant will travel to which country using which mode of transport. Feel free to unleash your creativity and preferences to solve this exciting travel puzzle!</p>
            <div className="page">
                <div className="field field_v1">
                    {['Personne 1 ', 'Personne 2 ', 'Personne 3 '].map((label, index) => (
                        <div key={index} className="input-group">
                            <label className="ha-screen-reader">
                                {label}
                                <input
                                    className="field__input" placeholder='name '
                                    type="text"
                                    value={people[index]}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleAddClick}>ajouter</button>
        </div>
    )
}

export default FirstStepPersonalizedPuzzle
