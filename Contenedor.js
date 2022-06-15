class Contenedor{
    constructor(){
        this.productos= [];
    }
   
    getById(id){
        const elemento = this.productos.filter(producto=> producto.id === id)
        return elemento   
    }
    getAll(){
        return this.productos
    }
    deleteById(id){
        const objeto = this.productos.filter(item=>item.id!=id)
        this.productos = objeto  
    }
    
    update(id, title, price, thumbnail){
        
        const index=this.productos.findIndex(element=>element.id==id)
        console.log(index)
        this.productos[index].title=title
        this.productos[index].price=price
        this.productos[index].thumbnail=thumbnail
      
        console.log(this.productos)        
    }
    newProduct(title, price, thumbnail){
        if(this.productos.length==0){
            const elemento = {
                title,
                price,
                thumbnail,
                id:1
            }
            this.productos.push(elemento)
            return elemento
        }else{
           const lastIndex = this.productos[this.productos.length-1].id
           const Index= lastIndex + 1
           const elemento = {
            title,
            price,
            thumbnail,
            id:Index
            }
            this.productos.push(elemento)
            return elemento
        }
    }

}

module.exports= Contenedor