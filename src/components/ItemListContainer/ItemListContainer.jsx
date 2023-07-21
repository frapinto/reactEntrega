import React, { useState, useEffect } from 'react';
import CombinedItemList from '../ItemList/ItemList';
import mockData from '../../mocks/mockData.json';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ saludo, welcome }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();


    const asyncMock = () => {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    };
  
    useEffect(() => {
        
      const getDataFromMock = async () => {
        await asyncMock();
        
        if (categoriaId){
            setProductList(mockData.filter((item) => item.category === categoriaId));
            setLoading(false);
        } else {
            setProductList(mockData);
            setLoading(false);
        }

      };
      getDataFromMock();
    }, [categoriaId]); 
  
    if(loading) return <h1> cargando...</h1>

  return (
    <div>
      <h1>{welcome}</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <CombinedItemList productList={productList} />
      )}
    </div>
  );
};

export default ItemListContainer;

