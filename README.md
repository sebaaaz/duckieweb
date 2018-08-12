# DuckieWeb

Este repositorio pretende guiar el proceso para poner en funcionamiento el monitoreo web de Duckietown.

# Requisitos

### [Repositorio de Duckietown](https://github.com/Duckietown-Chile/Software)

### [Jekyll](https://jekyllrb.com/docs/installation/)


# Cómo empezar

En la terminal de tu Duckiebot deberás instalar ROS Bridge mediante el comando:
```bash
sudo apt-get install ros-kinect-rosbridge-server
```
Esto permitirá a la interfaz escuchar los nodos de tu bot, los cuales están publicados en el puerto 8080 de tu servidor local.

Una vez instalado ROS Bridge y los requisitos, hacer un pull de este repositorio en la carpeta que desees.

```bash
git clone https://github.com/KratoSeba/duckieweb
```

Hecho esto dirígete a la carpeta mediante la terminal y ejecuta:

```bash
jekyll serve --port=4000
```

Puedes omitir el parámetro port el cuál viene por defecto en el valor 4000.

Una vez corriendo el servidor local, abre http://localhost:4000/ en tu navegador donde verás la interfaz de DuckieWeb.

## Funciones

<!-- ### Main commands

# Screenshots
|   |   |   |
|:---:|:---:|:---:|
|<img src="http://i.imgur.com/LXSlNVK.jpg" width="275">|<img src="http://i.imgur.com/hqbhwps.jpg" width="275">|<img src="http://i.imgur.com/Z7b1PqC.jpg" width="275">|
|Language|Intro|Help|
|<img src="http://i.imgur.com/k7Y9uhB.jpg" width="275">|<img src="http://i.imgur.com/817Vuys.jpg" width="275">|<img src="http://i.imgur.com/GfKEyTE.jpg" width="275">|
|Champions|Champion's info|Champion's info 2|
|<img src="http://i.imgur.com/ZHOzTZA.jpg" width="275">|<img src="http://i.imgur.com/eYRFMlY.jpg" width="275">|<img src="http://i.imgur.com/jPTRiqJ.jpg" width="275">|
|Champion's extra|Summoner|Skin|
|<img src="http://i.imgur.com/zqq3mBO.jpg" width="275">|<img src="http://i.imgur.com/uHuBn2h.jpg" width="275">|<img src="http://i.imgur.com/ymBSpIG.jpg" width="275">|
|Sales|Match blue team|Match red team|

Screenshots reorganized by [@mathieuzen](https://github.com/mathieuzen/)   -->