export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "CASH", imagem: "/assets/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Monitor Top Line", preco: 1200.50, descricaoPreco: "CASH", imagem: "/assets/monitor-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Keyboard A Series", preco: 749.99, descricaoPreco: "CASH", imagem: "/assets/teclado-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Fone Best FPS", preco: 599.99, descricaoPreco: "CASH", imagem: "/assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "headset", preco: 299.99, descricaoPreco: "CASH", imagem: "/assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "headset Top Line", preco: 399.99, descricaoPreco: "CASH", imagem: "/assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10},
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "CASH", imagem: "/assets/hd.jpg", quantidadeEstoque: 10},
    { id: 8, descricao: "Video Card", preco: 18449.99, descricaoPreco: "CASH", imagem: "/assets/placa-video.jpg", quantidadeEstoque: 10},
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "CASH", imagem: "/assets/processador.jpg", quantidadeEstoque: 10},
    { id: 10, descricao: "Notebook Top Line", preco: 2500, descricaoPreco: "CASH", imagem: "/assets/laptop-1.jpg", quantidadeEstoque: 10},
    { id: 11, descricao: "Notebook A Series", preco: 4500, descricaoPreco: "CASH", imagem: "/assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse standard", preco: 20, descricaoPreco: "CASH", imagem: "/assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse basics", preco: 200, descricaoPreco: "CASH", imagem: "/assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouse basics", preco: 50, descricaoPreco: "CASH", imagem: "/assets/mouse-4.jpg", quantidadeEstoque: 10},
    { id: 15, descricao: "Keyboard Top Line", preco: 159.99, descricaoPreco: "CASH", imagem: "/assets/teclado-2.jpg", quantidadeEstoque: 10},
]