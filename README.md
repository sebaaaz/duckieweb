# DuckieWeb

Este repositorio pretende guiar el proceso para poner en funcionamiento el monitoreo web de Duckietown.

# Requisitos

### [Repositorio de Duckietown](https://github.com/Duckietown-Chile/Software)

### [Jekyll](https://jekyllrb.com/docs/installation/)


# Cómo empezar

En la terminal de tu Duckiebot deberás instalar ROS Bridge mediante el comando:
'''bash
sudo apt-get install ros-kinect-rosbridge-server
'''
Esto permitirá a la interfaz escuchar los nodos de tu bot, los cuales están publicados en el puerto 8080 de tu servidor local.

Una vez instalado ROS Bridge y los requisitos, hacer un pull de este repositorio en la carpeta que desees.

'''bash
git clone https://github.com/KratoSeba/duckieweb
'''

Hecho esto dirígete a la carpeta mediante la terminal y ejecuta:

'''bash
jekyll serve --port=4000
'''

Puedes omitir el parámetro port el cuál viene por defecto en el valor 4000.

Una vez corriendo el servidor local, abre http://localhost:4000/ en tu navegador donde verás la interfaz de DuckieWeb.

## Funciones




# Commands

<!-- ### Main commands
```
/lang: Shows a keyboard to change the bot language.
/info: Gives information about the bot.
/roles: Shows info to filter the champions by them role.
/help: Shows help about the commands.
/champs: Gives a list with the name of all the champions.
/sale: Gives the champions and skins on sale.
/patch: Gives information about the last patch.
/credits: Bot credits.
/rate: Rate the bot :)
/contact: Send a message to the bot administrator.
/notify: Enable/Disable the notifications.
/keyboard: Shows the keyboard (Not available for groups).
/cancel: Cancel the current command.
/hideboard: Hides the keyboard (Not available for groups).
/rotation: Gives the champions on rotation this week.
/summoner: Shows info to search for summoners.
/match: Shows info to search matches.
```

#### The `/roles`, `/summoner` and `/match` commands will show another list of commands

##### `/roles`
```
/assassins: Filter the champions by the role: Assassin
/fighters: Filter the champions by the role: Fighter
/adcs: Filter the champions by the role: Marksman
/tanks: Filter the champions by the role: Tank
/mages: Filter the champions by the role: Mage
/supports: Filter the champions by the role: Support
```

##### `/summoner`
```
The bot has some commands for obtaining information about summoners in the different servers. The commands are:
/euw test - Information of the summoner 'test' at EUW
/eune test - Information of the summoner 'test' at EUNE
/br test - Information of the summoner 'test' at BR
/na test - Information of the summoner 'test' at NA
/las test - Information of the summoner 'test' at LAS
/lan test - Information of the summoner 'test' at LAN
/kr test - Information of the summoner 'test' at KR
/tr test - Information of the summoner 'test' at TR
/ru test - Information of the summoner 'test' at RU
/oce test - Information of the summoner 'test' at OCE
Remember to change 'test' for the name of the summoner you are searching.
```

##### `/match`
```
The bot has some commands for obtaining information about matches in the different servers. The commands are:
/match_euw test - Information about the current match of the summoner 'test' at EUW
/match_eune test - Information about the current match of the summoner 'test' at EUNE
/match_br test - Information about the current match of the summoner 'test' at BR
/match_na test - Information about the current match of the summoner 'test' at NA
/match_las test - Information about the current match of the summoner 'test' at LAS
/match_lan test - Information about the current match of the summoner 'test' at LAN
/match_kr test - Information about the current match of the summoner 'test' at KR
/match_tr test - Information about the current match of the summoner 'test' at TR
/match_ru test - Information about the current match of the summoner 'test' at RU
/match_oce test - Information about the current match of the summoner 'test' at OCE
Remember to change 'test' for the name of the summoner you are searching.
```

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