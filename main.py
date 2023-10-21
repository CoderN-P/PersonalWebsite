from flask import Flask, render_template

app = Flask(__name__)
# ste template folder to /src/templates


@app.route('/')
def index():
    return render_template('src/index.html')

@app.route('/static/<path:path>')
def static_file(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    app.run(port=5000, debug=True)