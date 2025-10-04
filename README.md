# MycoMarket
Desarrollo de un prototipo web modular con Flask y HTML
Instalación
1. Crear entorno virtual

En la carpeta del proyecto ejecutar:

python -m venv my_env

2. Activar entorno virtual

En Windows (CMD/PowerShell):

.\my_env\Scripts\activate

3. Instalar Flask

Con el entorno virtual activo:

pip install flask

 Ejecución del proyecto

Ir a la carpeta del proyecto:

cd 001-MycoMarket


Ejecutar el servidor:

python app.py


Abrir en el navegador:

http://127.0.0.1:5000/

 Estructura del proyecto
001-MycoMarket/
├── app.py
├── templates/
│   ├── propuesta_valor.html
│   ├── clientes.html
│   ├── productos.html
│   └── validacion.html
└── static/
    ├── css/
    ├── js/
    └── images/

 Desarrollo paso a paso

Instalación de Flask

Se creó un entorno virtual con:

python -m venv my_env


Se activó el entorno con:

.\my_env\Scripts\activate


Se instaló Flask con:

pip install flask


Creación del proyecto

Se creó la carpeta 001-MycoMarket.

Dentro se creó el archivo app.py.

En este archivo se importó Flask:

from flask import Flask, render_template
app = Flask(__name__)


Definición de rutas

Para la página principal:

@app.route('/')
@app.route('/home')
def home():
    return render_template('propuesta_valor.html')


Para otras páginas:

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/validacion')
def validacion():
    return render_template('validacion.html')


Ejecución en modo debug

Se agregó:

if __name__ == "__main__":
    app.run(debug=True)


Esto permite mostrar errores en consola mientras se desarrolla.

Prueba del servidor

Al inicio, la ruta /home no cargaba directo desde 127.0.0.1:5000/.

Se corrigió agregando también la ruta raíz /.

Ahora al abrir http://127.0.0.1:5000/ se carga automáticamente la página principal.
