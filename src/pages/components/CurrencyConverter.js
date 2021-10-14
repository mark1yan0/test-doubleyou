import React, { useState, useEffect } from 'react';
//icons
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';

const CurrencyConverter = () => {
  //state
  //generica data state
  const [currencies, setCurrencies] = useState({});
  //state of selected input
  const [userInput, setUserInput] = useState('');
  //state of conversion rate of selected currency
  const [selectedRate, setSelectedRate] = useState('');
  //state of converted
  const [converted, setConverted] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY; //.env
  const endpoint = 'latest';

  // function that gets the data from the request and sets the state
  async function getData() {
    try {
      //get request to get data
      let response = await axios.get(
        `http://data.fixer.io/api/${endpoint}?access_key=${API_KEY}`
      );

      //sets state to hold my data
      setCurrencies(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []); //calls get data once on render

  //converts currency
  function convertCurrency(amount, conversionRate) {
    return amount * conversionRate;
  }

  return (
    <div className='converter'>
      <form
        action='submit'
        className='converter-base'
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          placeholder="Inserire l'importo"
          onChange={e => {
            setUserInput(e.target.value);
            setConverted(convertCurrency(e.target.value, selectedRate));
          }}
        />
        <p className='base-currency'>&nbsp; {currencies?.base} </p>
      </form>

      <section className='select-currency'>
        <h3>Converti in &nbsp;</h3>
      </section>
      <section>
        <div className='converted'>
          <div className='converted-text'>
            <p className='converted-amount-input'>{userInput} &nbsp; </p>{' '}
            <p> EUR </p>
            <strong>
              <AiOutlineArrowRight className='icon' />
            </strong>{' '}
          </div>
          <strong>&nbsp; {converted}</strong>
          <select
            name='currencies'
            id='currencies'
            onChange={e => {
              setSelectedRate(e.target.value);
              setConverted(convertCurrency(userInput, e.target.value));
            }}
          >
            {currencies?.rates !== undefined && currencies?.rates !== null
              ? Object.entries(currencies?.rates).map(entry => (
                  <option key={entry[0]} value={entry[1]}>
                    {entry[0]}
                  </option>
                ))
              : console.log('loading...')}
          </select>
        </div>
      </section>
      <p>Rateo di conversione: {selectedRate}</p>
      <p className='date'>Data: {currencies?.date} </p>
    </div>
  );
};

export default CurrencyConverter;
