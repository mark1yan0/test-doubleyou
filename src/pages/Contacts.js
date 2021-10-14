import React, { useState } from 'react';

const Contacts = () => {
  //state of inputs
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: '',
  });

  //saving form inputs
  function handleChange(e) {
    if (e.target.name === 'name')
      setInputData({ ...inputData, name: e.target.value });
    if (e.target.name === 'email')
      setInputData({ ...inputData, email: e.target.value });
    if (e.target.name === 'message')
      setInputData({ ...inputData, message: e.target.value });
  }

  //console logging form data
  function submitForm(e) {
    e.preventDefault();
    console.log(inputData);

    //hookbin post request
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://hookb.in/E7Z8NzljbKIVjY66jjp3', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('done.');
      }
    };

    let data = JSON.stringify(inputData);

    xhr.send(data);
  }

  return (
    <div className='page'>
      <form action='submit' onSubmit={e => submitForm(e)} className='form'>
        <section className='contact-info'>
          <label htmlFor='name'>
            Nome
            <input
              name='name'
              type='text'
              placeholder='Inserisci il tuo nome'
              onChange={handleChange}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              name='email'
              type='email'
              placeholder='Inserisci la tua email'
              onChange={handleChange}
            />
          </label>
        </section>

        <label htmlFor='message'>
          Messaggio
          <textarea
            name='message'
            type='text'
            placeholder='Inserisci il tuo messaggio'
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Invia' />
      </form>
    </div>
  );
};

export default Contacts;
