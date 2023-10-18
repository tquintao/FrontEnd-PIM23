import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditFuncionarioModal(props) {
  const [funcionario, setFuncionario] = useState({});


    useEffect(() => {
        setFuncionario(props.funcionario);
    }, [props.funcionario]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFuncionario(prevState => ({ ...prevState, [name]: value }));
    };

    return (
      <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Editar Funcionário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {funcionario ? (
                  <Form>
                      <Form.Group>
                          <Form.Label>Nome</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="nmfuncionario" 
                              value={funcionario.nmfuncionario || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>CPF</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="cpffuncionario" 
                              value={funcionario.cpffuncionario || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>                      
                  </Form>
              ) : (
                  <p>Carregando detalhes do funcionário...</p>
              )}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={props.onClose}>
                  Fechar
              </Button>
              {funcionario && (
                  <Button variant="primary" onClick={() => props.onSave(funcionario)}>
                      Salvar Alterações
                  </Button>
              )}
          </Modal.Footer>
      </Modal>
  );
  
}

export default EditFuncionarioModal;
