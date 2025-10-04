from flask import Flask, render_template
app = Flask (__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('propuesta_valor.html')

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/validacion')
def validacion():
    return render_template('validacion.html')

if __name__ == "__main__": app.run(debug=True)