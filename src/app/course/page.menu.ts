interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = false

export const infoCourse = {
    title: "Lógica Programación",
    description: "La lógica de programación es la forma de pensar y resolver problemas con un lenguaje que la computadora pueda entender y ejecutar. Es la base para aprender cualquier lenguaje de programación. En este curso aprenderás los conceptos y técnicas esenciales de la lógica de programación.",
    image: "https://images.unsplash.com/photo-1681583484651-281ae2defb17?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-2-15',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-2-15',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Pacto pedagógico",
                date: '2024-2-15',
            },
            {
                href: "/course/activities/actividad1",
                label: "Actividad 1",
                date: '2024-2-22',
            },           
        ]
    },
    {
        href: "",
        label: "Semana 2",
        date: '2024-2-22',
        submenu: [
            {
                href: "/course/contents/semana2",
                label: "Contenido",
                date: '2024-2-22',
            },
            {
                href: "/course/activities/actividad2",
                label: "Actividad 2",
                date: '2024-2-22',
            },
        ]
    },
    {
        href: "",
        label: "Semana 3",
        date: '2024-2-29',
        submenu: [
            {
                href: "/course/contents/semana3",
                label: "Contenido",
                date: '2024-2-29',
            },
            {
                href: "/course/activities/actividad3",
                label: "Actividad 3",
                date: '2024-2-29',
            },
        ]
    },
    {
        href: "",
        label: "Semana 4",
        date: '2024-3-8',
        submenu: [
            {
                href: "/course/contents/semana4",
                label: "Contenido",
                date: '2024-3-8',
            },
            {
                href: "/course/activities/actividad4",
                label: "Actividad 4",
                date: '2024-3-8',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 5",
        date: '2024-3-12',
        submenu: [
            {
                href: "/course/contents/semana5",
                label: "Contenido",
                date: '2024-3-12',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 6",
        date: '2024-3-19',
        submenu: [
            {
                href: "/course/contents/semana6",
                label: "Contenido",
                date: '2024-3-19',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 7",
        date: '2024-4-2',
        submenu: [
            {
                href: "/course/contents/semana7",
                label: "Contenido",
                date: '2024-4-2',
            },
            {
                href: "/course/activities/actividad5",
                label: "Actividad 5",
                date: '2024-4-2',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 8",
        date: '2024-4-2',
        submenu: [
            {
                href: "/course/contents/semana8",
                label: "Contenido",
                date: '2024-4-2',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
]
