import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'

import api from './services/api'

import './styles.css'

function App() {
    const alert = useAlert()
    
    const [produtos, setProdutos] = useState([])
    const [newProduct, setNewProduct] = useState([])

    const [cProduto, setCProduto] = useState([])
    const [updateProduct, setUpdateProduct] = useState([])

    useEffect(() => {
        api.get('productList').then((response) => setProdutos(response.data))
    }, [produtos])

    function createProduct() {
        if(newProduct) api.post('createProduct', { nome: newProduct })
        else alert.show('Insira um valor válido!')
    }

    const handleChangeNewProduct = (event) => setNewProduct(event.target.value)

    const handleChangeUpdateProduct = (event) => setUpdateProduct(event.target.value)

    const handleChangeCProduct = (event) => setCProduto(event.target.value)

    function updateProd() {
        ;(updateProduct !== '' || updateProduct !== null) &&
        (cProduto !== '' || cProduto !== null)
            ? api.put('updateProduct', { nome: updateProduct, cProduto })
            : alert.show('Insira um valor válido!')
    }

    function delProd() {
        cProduto !== '' || cProduto !== null
            ? api.delete(`deleteProduct/${cProduto}`)
            : alert.show('Insira um valor válido!')
    }

    return (
        <div className="container">
            <div className="box">
                <div className="header">
                    <h1>Crud</h1>
                </div>

                <input
                    type="text"
                    onChange={handleChangeNewProduct}
                    placeholder="Digite um novo produto"
                    required
                />
                <button onClick={createProduct}>Criar Produto</button>

                <div id="table-wrapper">
                    <div id="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span class="text">Nome Produto</span>
                                    </th>
                                    <th>
                                        <span class="text">Código Produto</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((produto) => (
                                    <tr>
                                        <td>{produto.cProduto}</td>
                                        <td>{produto.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="input-group">
                    <input
                        type="number"
                        placeholder="cProduto"
                        onChange={handleChangeCProduct}
                        required
                    />
                    <button onClick={updateProd}>Update</button>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nome para Update"
                        onChange={handleChangeUpdateProduct}
                        required
                    />
                    <button onClick={delProd}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default App
