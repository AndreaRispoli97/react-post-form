import { useState } from 'react'
import axios from 'axios'


function App() {

  const [newData, setNewData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })


  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setNewData((newData) => ({
      ...newData,
      [e.target.name]: value,
    }));
  }

  function fetchData(e) {
    e.preventDefault();
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', newData)
      .then(res => {
        console.log(res.data)
        alert('form inviato')
      })
      .catch(err => {
        console.log(err.data)
        alert('Non inviato')

      })
  }


  return (
    <>
      <h1>React-Post-Form</h1>
      <form onSubmit={fetchData}>
        <label htmlFor="author">Inserisci Autore</label>
        <input type="text"
          name='author'
          value={newData.author}
          onChange={handleFormData}
          placeholder='Inserisci Autore'
        />
        <label htmlFor="title">Inserisci Titolo</label>
        <input type="text"
          name='title'
          value={newData.title}
          onChange={handleFormData}
          placeholder='Inserisci Titolo'
        />
        <label htmlFor="body">Inserisci Contenuto</label>
        <input type="text"
          name='body'
          value={newData.body}
          onChange={handleFormData}
          placeholder='Inserisci Contenuto'
        />
        <label htmlFor="public">Disponibile</label>
        <input type="checkbox"
          name='public'
          value={newData.public}
          onChange={handleFormData}
        />
        <button type='submit'>Invia</button>
      </form>
    </>
  )
}

export default App
