import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import "./style.scss";
import { useFormik } from 'formik';
import * as Yup from "yup";
const API = "https://65a14b9c600f49256fb15fe1.mockapi.io";

const NoteForm = () => {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    const loadData = async()=>{
        const resp = await axios (`${API}/todo`);
        const data = resp.data;

       const arr = data.map((item)=>({
        id:item.id,
        todo:item.todo,
       }));
       setTodos(arr);
    }

    const onSubmit = async (values,{resetForm}) =>{

        setLoading(true);
        try {
            const resp = await fetch(`${API}/todo`,{
                method:"POST",
                body: JSON.stringify(values),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(!resp.ok) throw new Error("something went wrong");
            alert("todo created");
            resetForm();
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false);
        }
    }
    const initialValues = {
        todo:  "",
    };

    const validationSchema = Yup.object({
        todo: Yup.string()
        .min(1, "Invalid todo")
        .max(50, "Invalid todo")
        .required("todo required")
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    useEffect(()=>{
        loadData();
    },[]);

  return (
    <Container className='border con'>
        <Form className='form-con' noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3 mt-3 ms-3 border" style={{ width: '18rem' }} controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder=''{...formik.getFieldProps("todo")} />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='ms-3 btn' >
            Create Note
        </Button>
        </Form>
    </Container>

  )
}

export default NoteForm