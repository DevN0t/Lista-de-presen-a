import { useState } from 'react'
import './styles.css'
import { Card } from '../../components/card';


function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);


  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
  };

  setStudents(prevState => [...prevState, newStudent])
  }
    

  return (
    <div className='container'>

      <header>

        <h1>Lista de Presença</h1>
        <div>
          <strong>Caynã</strong>
          <img className='container-img' src="https://github.com/DevN0t.png" alt="" />
        </div>

      </header>
      
      <input 
      type="text" 
      placeholder='Digite o nome'
      onChange={e => setStudentName(e.target.value)}
      />

      
      <button type="submit"
      onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {
        students.map(student => 
        <Card 
        key={student.time}
        name={student.name} 
        time={student.time}
        />)
      }
    </div>
  )
}
export default Home
