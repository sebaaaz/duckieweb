# DuckieWeb

## ¿Qué es DuckieWeb?
DuckieWeb es un proyecto que busca monitorear tanto el estado de Duckietown como de sus Duckiebots representando todos sus datos en una interfaz web que sea simple y agradable visualmente para el usuario.

Este repositorio pretende guiar el proceso para poner en funcionamiento el monitoreo web de la ciudad Duckietown.

# Requisitos para tu PC

### [Jekyll](https://jekyllrb.com/docs/installation/)
Jekyll sirve para montar sitios web estáticos en nuestro propio servidor local. Lo usamos para montar la web que se encuentra en este repositorio.

# Cómo empezar

La versión ROS utilizada por los duckiebots es **kinetic** por lo que en la terminal de tu bot deberás instalar esta versión de ROS Bridge mediante el comando:
```bash
sudo apt-get install ros-kinetic-rosbridge-suite
```
Esto permitirá a la interfaz escuchar los tópicos de ROS de tu duckiebot, los cuales serán publicados en el puerto 8080 de tu servidor local cuando ejecutes:
```bash
roslaunch rosbridge_server rosbridge_websocket.launch
```
Este comando debe usarse en la terminal de tu duckiebot, procurando que roscore esté iniciado.
Una vez instalado ROS Bridge y los requisitos, hacer un pull de este repositorio en la carpeta que desees de tu PC.

```bash
git clone https://github.com/KratoSeba/duckieweb
```

Hecho esto dirígete a la carpeta mediante la terminal y ejecuta:

```bash
jekyll serve
```

Una vez corriendo el servidor local, abre [http://localhost:4000/](http://localhost:4000/) en tu navegador donde verás la interfaz de DuckieWeb.

# Demo

Dentro de la ruta */demo* se encuentra un archivo llamado **simulador.py** que busca simular un duckiebot local y así poder visualizar su velocidad linear y angular en tiempo real.
La idea es ejecutar **roscore** y **ROS Bridge** en el PC de igual forma como si de un Duckiebot se tratara.
Luego en la carpeta mencionada escribe:
```bash
python2.7 simulador.py
```
Luego puedes deslizar las barras con el programa ejecutado, si logras ver las velocidades y estas se actualizan en tiempo real, estás listo para conectar tu duckiebot.
IMPORTANTE: Asegúrate que estás visualizando localhost en la página.

### Video Demostración

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Gf40fGSc_2g" target="_blank"><img src="http://i3.ytimg.com/vi/Gf40fGSc_2g/maxresdefault.jpg" align="center" target="_blank"></a>

# Ideas a Futuro

- Página responsiva
- Versión móvil
- Ver cámara en tiempo real
- Total integración con otros proyectos como:
	* Semáforos
	* Localización GPS
	* Reconocimiento de objetos (Machine Learning)
	* Visualizar mapa de la ciudad

# Agradecimientos

Bootstrap 4 | https://getbootstrap.com/

jQuery | https://jquery.com/

ROS Kinetic | http://www.ros.org/

Jekyll | https://jekyllrb.com/

A todo el equipo de Duckietown Chile
http://duckietown.cl







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
