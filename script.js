body{
    background-color: #F3F5FC;
}
header{
    width: 100%;
    height: 70px;
}

.logo{
    height: 30px;
    position: absolute;
    left: 2.78%;
    top: 3.9%;

}

main{
    position: absolute;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
}

.contenedor-caja-texto{
    position: absolute;
    left: 10.67%;
    top: 10.40%;
    width: 65%;
    height: 58.59%;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.cajatexto{
    width: 80%;
    height: 100%;
    border: none;
    background-color: #F3F5FC ;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    cursor: pointer;
    color: #0A3871;
    font-size: 32px;
    font-weight: 400;
}

.cajatexto::placeholder{
    color: #0A3871;
    font-family: "Inter", sans-serif;
    font-weight: 400;
}

.alerta{
    position: absolute;
    top: 83.1%;
    left: 10.67%;
    display: flex;
    color: #495057;
    font-family: "Inter", sans-serif;
    font-weight: 400;
}

.contenedor-botones{
    position: absolute;
    top: 86.43%;
    left: 10.67%;
}

.btn-encriptar{
    width: 350px;
    height: 67px;
    border-radius: 15px;
    background-color: #0A3871;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;
    margin-right: 20px;
}

.btn-desencriptar{
    width: 350px;
    height: 67px;
    border-radius: 15px;
    background-color: #D8DFE8;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #0A3871 ;
    font-size: 20px;
    border: 2px solid #0A3871;
    cursor: pointer;
    margin-right: 20px;
}

.seccion2{
    display: inline-block;
    position: absolute;
    top: -10%;
    width:23.78%;
    height: 105%;
    left: 72.94%;
    background-color: white;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border-radius: 40px;
    box-shadow: 0px 24px 32px -8px rgba(0,0,0,0.50);
}

.contenedor-muneco{
    position:absolute;
    scale: 0.5;
    left: -15px;
    top: 30px;
    box-sizing: border-box;
    padding-top: 50px;
}

.contenedor-parrafo{
    position: absolute;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    top: 65.4%;
    left: 20px;
}

.contenedor-parrafo h3{
    font-size: 24px;
    text-align: center;
    color: #343A40;
    font-family: "Inter", sans-serif;
    font-weight: 400;
}

.contenedor-parrafo p{
    font-size: 16px;
    text-align: center;
    color: #495057;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    padding-top: 20px;
}

.contenedor-resultado{
    position: absolute;
    top: 100px;
    width: 320px;
    height: 450px;
    padding: 0;
    box-sizing: border-box;
    margin-left: 25px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
}

.contenedor-resultado p{
    color: #495057;
    font-size: 20px;
    width: auto;
}

.contenedor.copiar {
    display: flex;
    position: absolute;
    bottom: 400px;
    top: 700px;
    background-color: aqua;
    padding-left: 40px;
}

.btn-copiar {
    width: 330px;
    height: 67px;
    border-radius: 24px;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #0A3871 ;
    font-size: 16px;
    border: 2px solid #0A3871;
    cursor: pointer;
    position: absolute;
    top: 92%;
    left: 0%;
}

.ocultar{
    display: none;
}
