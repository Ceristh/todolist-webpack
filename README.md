# Webpack Todo List.

## Notas:
installar modulos de node
```
npm install
```

Y para construir el build:
```
npm run build
```

para ver projecto:
```
npm run server
```

## Información paginas referencia:
[filter, ocupado en eliminacion de un todo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


+ Funcion de flecha
+ const (constantes)
+ template literal
+ incrustar una variable en un template literal

## Babel
+ babel en webpack
~~~
npm install --save-dev babel-loader @babel/core
~~~
~~~
npm install @babel/preset-env --save-dev
~~~
+ babel.config.json
json
~~~
{
  "presets": ["@babel/preset-env"]
}
~~~