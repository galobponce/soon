<h1 style="border: none" align="center">Soon :computer:</h1>
<p align="center">
  Videochatea con quien sea!
</p>


# <h1 style="border: none" id="resumen">Contenidos</h1>

- <a href="#resumen">Resumen</a>
- <a href="#web-rtc">¿Qué es WebRTC?</a>
- <a href="#web-sockets">Diferencia con WebSockets</a>
- <a href="#como-funciona">¿Cómo funciona WebRTC por dentro?</a>
- <a href="#problemas">Problemas, ¿Son realmente problemas?</a>
- <a href="#por-que">¿Por qué utilizar WebRTC?</a>
- <a href="#fuentes">Fuentes</a>

# <h1 style="border: none" id="resumen">Resumen</h1>

Soon es una aplicación web para videochatear con quien sea desde tu navegador web.

Tan solo se requiere una cámara y un micrófono en tu computadora. :camera: :microphone:

Utiliza los protocolos de WebRTC para realizar el intercambio de datos entre clientes.

# <h1 id="web-rtc">¿Qué es WebRTC?</h1>

WebRTC significa, por sus siglas, "Web Real Time Communication" (comunicación en tiempo real mediante la web).

Es un proyecto que le permite a los navegadores web comunicarse entre sí directamente, es decir, sin necesidad de que la información pase por el servidor.

# <h1 id="web-sockets">Diferencia con WebSockets</h1>

Este tipo de comunicación recuerda, a simple vista, a los WebSockets. Aunque los que los distingue es que la comunicación en WebRTC es directa.

En una comunicación mediante WebSockets, los clientes mandan la información (por ejemplo mensaje en un chat), la misma viaja al servidor y, desde allí, llega a los demás clientes.

En cambio, en una comunicación mediante WebRTC, los clientes se **indentifican** con el servidor y, a partir de allí, comienzan a comunicarse cliente-a-cliente (peer to peer) de manera directa.

# <h1 id="como-funciona">¿Cómo funciona?</h1>

Probablemtente nos preguntemos cómo se conocen los clientes para intercambiar información entre ellos. La respuesta es *signaling*.

La idea es sencilla, un ***Cliente A*** le manda una petición de querer comunicarse con un ***Cliente B*** al servidor. 

Luego, el servidor le manda una **signal** al ***Cliente B*** diciendole que el ***Cliente A*** quiere comunicarse con él. En esa **signal** está la información del ***Cliente A***. 

Si el ***Cliente B*** acepta, le manda su información al servidor para que el mismo se la mande al ***Cliente A***. 

De esta manera, ambos clientes tienen la información del otro y pueden comenzar a comunicarse entre sí sin la necesidad del servidor.

WebRTC funciona gracias al conjunto de protocolos que utiliza por dentro, además de las API's que están dentro de los navegadores.

Uno de los protocolos que hace posible esta comunicación entre clientes es el famoso protocolo NAT, cuyas siglas significan Network Address Translation (Traducción de Direcciones de Red). 

Este protocolo le da una IP pública a cada enrutador y, a su vez, una IP privada a cada dispositivo dentro de cada red. De esta manera, las comunicaciones se hacen a través de las IP públicas, pero el enrutador de cada red llevará la información a la IP privada correspondiente.

# <h1 id="problemas">Problemas, ¿Son realmente problemas?</h1>

### UDP

Uno de los problemas de WebRTC es que utiliza el protocolo UDP para transportar la información.

Esto lo hace debido a que la idea del proyecto es que la información vaya de un cliente a otro muy rápidamente. 

El problema de esto es que el protocolo no chequea si la información llegó en su totalidad desde el emisor al receptor. Pero esto podría no ser un problema ya que la idea principal de WebRTC es transportar información de videollamadas y voz, es decir que perder milésimas de segundo de voz o algunos frames de un video no es un gran problema.

Si en cambio se quiere mandar información de otro tipo como contraseñas o archivos, un byte perdido de ese archivo puede hacer que se corrompa el archivo, arruinando la comunicación.

### Signaling No Estándar

Es decir, los protocoles para realizar los avisos e intercambios de información entre clientes a través del servidor no son estándares, cada empresa y desarrollador decide de qué manera hacerlo.

### Tecnología Web

Como toda tecnología nueva que corre en la web, los navegadores tienen que actualizarse constantemente para ser compatibles con las mismas. El problema es que no todos pueden / quieren (eJ: Edge)

# <h1 id="por-que">¿Por qué utilizar WebRTC?</h1>

### Tecnología Web

El hecho de ser una tecnología web, al igual que da problemas, también brinda buenas soluciones, ya que no debemos descargarnos aplicaciones externas a la web como Zoom.

### Recursos Embebidos en la Web

Otra solución que nos brinda el hecho de estar en la web es que los recursos (Todas las API's de los protocolos y librerías) de esta tecnología están embebidos en la web.

### Es Seguro

Las aplicaciones que corren dentro de la web están siendo verificadas constantemente por los navegadores en busca de software malicioso, por lo que esto nos asegura que nuestra computadora no se infecte.

Además, los permisos para el video y voz deben estar dados de manera explícita por los usuarios.

# <h1 id="fuentes">Fuentes</h1>

- https://webrtc.org