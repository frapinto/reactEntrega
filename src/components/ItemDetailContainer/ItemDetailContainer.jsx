//
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import mockData from '../../mocks/mockData.json';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true); //trackea si mockData es fetcheada
    const { id } = useParams(); //desestructura el id de los parametros devueltos por useParams

    const asyncMock = () => {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    useEffect(() => {
        const getDataFromMock = async () => {
            await asyncMock();

            setProductDetail(mockData.find((item) => item.id === parseInt(id)));
            setLoading(false);
        };
        getDataFromMock();
    }, []);

    if(loading) return <h1> cargando...</h1>




    const handleAddToCart = (count) => {
        console.log(`Añadiste${count} item(s) al carrito`);
    };

    return (
        <div>
            {loading ? <p>Cargando</p> : <ItemDetail productDetail={productDetail} onAdd={handleAddToCart} />}
        </div>
    );
};

export default ItemDetailContainer;