import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import CardHeader from './note/card-header';
import "./style.scss"
const Notes = () => {
    const API = "https://65a14b9c600f49256fb15fe1.mockapi.io";
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadData = async () => {
        try {
            const resp = await axios(`${API}/todo`);
            const data = resp.data;

            const arr = data.map((item) => ({
                id:item.id,
                todo: item.todo,
            }));
            setTodos(arr)
        } catch (error) {
            console.log("Error loading data :", error.message);
        }
    }

    const toggleIcon = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const deleteTodo = async(id)=>{
        try {
            await axios.delete(`${API}/todo/${id}`);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
            loadData();
        } catch (error) {
            console.error('Error deleting todo:', error.message);
        }
      }


      const onSubmit = async (values, {resetForm}) => {
        setLoading(true);
        try {
          const resp = await fetch(`${API}/todo`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if(!resp.ok) throw new Error("something went wrong");
          alert("todo created");
          resetForm();
          loadData();
        } catch (error) {
          console.log(error.message);
        }finally{
          setLoading(false);
        }
      }
      
    useEffect(()=>{
        loadData();
    },[])



  return (
    <Container>
    {todos.map((item, index) => (
      (index % 3 === 0) && (
        <Row key={index}>
          {todos.slice(index, index + 3).map((todo) => (
            <Col key={todo.id} xs={4}>
              <Card className='card' style={{ width: '18rem', margin: '10px' }}>
                <Card.Header>
                  <CardHeader {...todo}></CardHeader>
                </Card.Header>
                <Card.Body>
                  <span className='check' onClick={() => toggleIcon(todo.id)}>
                    {todo.completed ? (
                      <MdCheckBox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </span>
                  <span className='delete' onClick={() => deleteTodo(todo.id)}>
                    <IoMdTrash />
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )
    ))}
  </Container>
  )
}

export default Notes