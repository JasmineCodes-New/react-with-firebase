import React,{createContext} from 'react';
import { db } from '../config/Config';

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component{

    //initial state of empty array of products
    state={
        products: []
    }

    componentDidMount(){
        const prevProducts = this.state.products; 
        db.collection('Products').onSnapshot(snapshot=>{
            let changes = snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type==='added'){
                    prevProducts.push({
                        ProductID: change.doc.id, 
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice, 
                        ProductImg: change.doc.data().ProductImg,
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }

    render(){
        return(
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}