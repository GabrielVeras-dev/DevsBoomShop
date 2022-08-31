export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number; 
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Monitor Gamer Asus TUF 23.6, Curvo, 165 Hz, Full HD, 1ms", preco: 1599.99 ,  descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-asus-tuf-01.jpg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Monitor Gamer Asus 23.8' IPS, Wide, 144 Hz, Full HD, 1ms", preco: 1899.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-asus-02.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Monitor Gamer Acer Nitro QG241Y S 23.8 LED Full HD, , 165Hz, 1ms", preco: 1159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-acer-03.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Monitor Gamer Samsung Odyssey G3, 24 Full HD, 144Hz, 1ms", preco: 1399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-samsung-04.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Monitor Gamer LG 29' IPS, Ultra Wide, 75 Hz, Full HD, FreeSync,", preco: 1359.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor05.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Gabinete Rise Mode Glass 06, Frente e Lateral em Vidro", preco: 249.99, descricaoPreco: "À vista no PIX", imagem: "./assets/gabinete-rise-01.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Gabinete Gamer Husky Frost, Mid Tower, ARGB, com FAN, Porta em Vidro Temperado", preco: 849.99, descricaoPreco: "À vista no PIX", imagem: "./assets/gabinete-gamer-husky-frost-mid-tower-02.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Gabinete Gamer NOX Infinity Alpha, ARGB Rainbow, 1 Cooler, Lateral em Vidro", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/gabinete-gamer-nox-infinity-alpha-03.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Gabinete C3Tech Gamer ATX", preco: 149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/gabinete-c3tech-gamer-atx-04.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/headset-01.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Headset Gamer Husky Gaming Storm V2, Preto, P2", preco: 69.99, descricaoPreco: "À vista no PIX", imagem: "./assets/headset-02.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Headset Gamer Husky Gaming Polar, Preto, P2", preco: 109.99, descricaoPreco: "À vista no PIX", imagem: "./assets/headset-03.jpg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Headset Gamer HyperX Cloud Stinger", preco: 279.99, descricaoPreco: "À vista no PIX", imagem: "./assets/headset-04.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT + Mouse Cobra M711, Chroma, 10000DPI - Preto", preco: 309.99, descricaoPreco: "À vista no PIX", imagem: "./assets/kit-gamer-01.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT + Mouse Cobra M711, Chroma, 10000DPI - Branco", preco: 309.99, descricaoPreco: "À vista no PIX", imagem: "./assets/kit-gamer-02.jpg", quantidadeEstoque: 10 },
    { id: 16, descricao: "Teclado Shark Skiller, Switch Blue, ABNT2 + Mouse SGM2, 6400 DPI - SGB30", preco: 309.99, descricaoPreco: "À vista no PIX", imagem: "./assets/kit-gamer-03.jpg", quantidadeEstoque: 10 },
    { id: 17, descricao: "Kit Teclado e Mouse Gamer Multilaser Lightning ABNT2", preco: 199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/kit-gamer-04.jpg", quantidadeEstoque: 10 },
    { id: 18, descricao: "Intel Core i5-10400, 2.9GHz (4.3GHz Max Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA 1200, Vídeo Integrado", preco: 1049.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador-1.jpg", quantidadeEstoque: 10 },
    { id: 19, descricao: "AMD Ryzen 5 5600X, 3.7GHz (4.6GHz Max Turbo), Cache 35MB, 6 Núcleos, 12 Threads, AM4 ", preco: 1289.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador-2.jpg", quantidadeEstoque: 10 },
    { id: 20, descricao: "Processador Intel Core i7-10700F, 2.9GHz (4.8GHz Max Turbo), Cache 16MB, Octa Core, 16 Threads, LGA 1200", preco: 1619.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador-4.jpg", quantidadeEstoque: 10 },
    { id: 21, descricao: "Processador AMD Ryzen 7 5800X, 3.8GHz (4.7GHz Max Turbo), Cache 36MB, Octa Core, 16 Threads", preco: 2299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador-3.jpg", quantidadeEstoque: 10 },
    { id: 22, descricao: "Placa-Mãe MSI A320M-A Pro Max p/ AMD AM4, m-ATX, DDR4", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa01.jpg", quantidadeEstoque: 10 },
    { id: 23, descricao: "Placa-Mãe ASRock B450M Steel Legend, AMD AM4, mATX, DDR4 ", preco: 799.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa02.jpg", quantidadeEstoque: 10 },
    { id: 24, descricao: "Placa-Mãe MSI B560M-A PRO, LGA 1200, Intel B560, MATX, DDR4", preco: 519.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa03.jpg", quantidadeEstoque: 10 },
    { id: 25, descricao: "Placa Mãe Gigabyte H410M H V3 (Rev. 1.0), Intel LGA1200, mATX, DDR4", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa04.jpg", quantidadeEstoque: 10 },
    { id: 26, descricao: "Placa de Vídeo Galax NVIDIA GeForce GTX 1660 Super (1-Click OC), 6GB, GDDR6", preco: 1599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placavideo01.jpg", quantidadeEstoque: 10 },
    { id: 27, descricao: "Placa de Vídeo Zotac Gaming NVIDIA GeForce RTX 2060, 6GB, GDDR6", preco: 1799.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placavideo02.jpg", quantidadeEstoque: 10 },
    { id: 28, descricao: "Placa de Vídeo Gigabyte NVIDIA GeForce RTX 3050 Gaming OC, 8GB GDDR6, RGB, LHR, DLSS, Ray Tracing", preco: 2399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placavideo03.jpg", quantidadeEstoque: 10 },
    { id: 29, descricao: "Placa de Vídeo EVGA NVIDIA GeForce RTX 3090 Ti FTW3 Black Gaming, 24GB GDDR6X, LHR, iCX3, ARGB LED, DLSS, Ray Tracing", preco: 11999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placavideo04.jpg", quantidadeEstoque: 10 },
    { id: 30, descricao: "Placa de Vídeo Asus NVIDIA GeForce ROG Strix RTX 3060 O12G V2 Gaming OC Edition, 12GB GDDR6, DLSS, Ray Tracing ", preco: 2999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placavideo05.jpg", quantidadeEstoque: 10 },
]