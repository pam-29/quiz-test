import React, { useState } from 'react'
import Quizz from './enigme.json'
import './Enigme.css'

function Enigme({retourMenu}) {
    const normal = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

    const [enigme, setEnigme] = useState(0);
    const [answerUser, setAnswerUser] = useState("");
    const [result, setResult] = useState(null);
    const lastEnigme = enigme === Quizz.length - 1;


    const verifieReponse = () => {
        const bonneReponse = normal(Quizz[enigme].reponse);
        const userReponse = normal(answerUser);

        userReponse === bonneReponse ? setResult ("Correct") : setResult ("Incorrect");
        };

    const nextEnigme = () => {
        setEnigme(enigme + 1);
        setAnswerUser("");
        setResult(null);
    };

  return (
    <div>
        {result && (
                <p className='p-result'>{result === "Correct" ? "Bonne reponse !" : "Mauvaise reponse, reessayez."}</p>
        )}


        <div className='question'>
            <p> {Quizz[enigme].question} </p>
        </div>

        <div className='answer'>
            <input 
                type="text" 
                value={answerUser}
                onChange={(e) => setAnswerUser(e.target.value)}
            />

            {result === "Correct" ? (
            <>
                {lastEnigme ? (
                <button onClick={retourMenu} className='btn-menu'>Menu</button>
                ) : (
                <button onClick={nextEnigme} className='btn-next'>Suivant</button>
                )}
            </>
            ) : (
            <button onClick={verifieReponse} className='btn-valid'>Valider</button>
            )}
            
        </div>
    </div>
  )
}

export default Enigme
