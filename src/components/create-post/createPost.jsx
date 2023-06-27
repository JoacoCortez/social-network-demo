import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./createPost.css";



export default function CreatePost() {
    
    const [newPost, setNewPost] = useState({
        author: "",
        content: {
            text: "",
            img: ""
        },
        interactionData: null
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function handleChange(e){
        setNewPost({...newPost, [e.target.name]: e.target.value})
    }
    

    async function handleCreate(e){
        try {
            e.preventDefault()

            const data = {
                author: newPost.author,
                content: newPost.content,
                interactionData: null
            }

            await axios.post("http://localhost:8080/api/post/home/post", data)
        
            setNewPost(data)

        } catch (error) {
            console.log("HANDLE CREATE ERROR ", error)    
        }

        
    }
  
  
  
    return (
    <>
        <div className='create-post-container'>
            <p className='create-text'>Compartí tu idea</p>
            <button className="create-post" onClick={handleShow}>+</button>
        </div>
    
        
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" name='text' onChange={handleChange} value={newPost.content.text}/>
                <input type="image" name='img' onChange={handleChange} value={newPost.content.img}/>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleClose}>
                    Close
                </button>
                <input type="submit" onSubmit={handleCreate}/>
            </Modal.Footer>
        </Modal>
    
    </>
    )
}






