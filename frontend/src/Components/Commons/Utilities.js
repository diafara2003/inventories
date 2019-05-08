
export const MENUS_OP = [
    {
        item: 'Productos', subItem: [
            { name: 'Crear Prodcuto', path:'/newproduct' },
            { name: 'Consultar Prodcuto', path:'/products' },
            { name: 'Crear categoria', path:'/' },
            { name: 'Consultar categoria', paht:'/' },
        ]

    },
    {
        item: 'Entrada de almacén', subItem: [
            { name: 'Crear entrada', path:'/newentry' },
            { name: 'Edición entrada', path:'/entries' },
            { name: 'Aprobación entrada', path:'/' },            
        ]

    },
    {
        item:'Salida de almacén',
        subItem:[
            { name: 'Crear salida', path:'/' },
            { name: 'Edición salida', path:'/' },
        ]
    },
    {
        item:'Informes',
        subItem:[
            { name: 'Informe de  salida', path:'/' },
            { name: 'Informe de entrada', path:'/' },
        ]
    }

];
