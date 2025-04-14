import { useEffect, useState } from 'react'
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
      [e.target.name]: e.target.value,
    }));
  }

  function fetchData() {
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
      .then(res => {
        setNewData(res.data)
      })
  }

  console.log(newData)

  return (
    <>
      <h1>React-Post-Form</h1>
      <form>
        <input type="text"
          name='author'
          value={newData.author}
          onChange={handleFormData}
          placeholder='Inserisci'
        />
        <input type="text"
          name='title'
          value={newData.title}
          onChange={handleFormData}
          placeholder='Inserisci'
        />
        <input type="text"
          name='body'
          value={newData.body}
          onChange={handleFormData}
          placeholder='Inserisci'
        />
        <input type="checkbox"
          name='public'
          value={newData.public}
          onChange={handleFormData}
        />

      </form>
    </>
  )
}

export default App
