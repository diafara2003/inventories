
export const MENUS_OP = [
    {
        item: 'Productos', subItem: [
            { name: 'Crear Producto', path:'/newproduct' },
            { name: 'Consultar Prodcuto', path:'/products' },
            { name: 'Crear categoria', path:'/products' },
            { name: 'Consultar categoria', path:'/products' },
        ]

    },
    {
        item: 'Entrada de almacén', subItem: [
            { name: 'Crear entrada', path:'/newentry' },
            { name: 'Edición entrada', path:'/entries' },
            { name: 'Aprobación entrada', path:'/entries' },            
        ]

    },
    {
        item:'Salida de almacén',
        subItem:[
            { name: 'Crear salida', path:'/entries' },
            { name: 'Edición salida', path:'/entries' },
        ]
    },
    {
        item:'Informes',
        subItem:[
            { name: 'Informe de  salida', path:'/entries' },
            { name: 'Informe de entrada', path:'/entries' },
        ]
    }

];
