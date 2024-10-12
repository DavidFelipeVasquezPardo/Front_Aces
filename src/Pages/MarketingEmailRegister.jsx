import { useState } from 'react';
import axios from 'axios';

export function MarketingEmailRegister() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    try{

        const res = await axios.post ('http://localhost:3000/apiAces/MarketingEmailRegister', {
            name,
            email,
        })

        setResponse(res.data.message || 'Datos enviados')

    }
    catch(error){

        console.error('Error al enviar datos:', error);
        setResponse('Error al enviar datos');

    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
