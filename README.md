## PRUEBA TÉCNICA_PROC. SELECCIÓN FRONTEND DEVELOPER

La prueba consistirá en realizar una mini-webapp en la que se mostrará un listado de películas
con su póster, título y fecha de estreno. Una vez que se pinche en la imagen de alguna de ellas
se visualizarán todos los datos de la misma y un pequeño formulario en el que puedas poner
puntuación a la misma y un breve comentario.

Para la obtención de los datos de las películas se utilizará el siguiente API KEY de
TheMovieDB API: 8f781d70654b5a6f2fa69770d1d115a3
Se podrá utilizar la query de consulta por texto con el formato:
https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={text}

Con lo que se obtendrá fácilmente un listado de películas.

### Condiciones

- Desarrollar usando React
- El buscador + listado en una ruta principial o /search
- Otra ruta con las películas que se han valorado o comentado, en /mylist
- Se puede utilizar cualquier librería de componentes, sea pública o propia.
- Tiene que tener algún test unitario.
- El guardado de información debería hacerse con react-redux o los hooks
- useContext+useReducer.
- Usar Typescript.

### Entrega:

- Se creará un repositorio en GITHUB
- En rama master se mantendrá la estructura básica
- En rama develop se subirá el desarrollo de la webapp.
- Opcional (suma puntos):
- Los tests unitarios/funcionales con la librería React Testing Library
  Splitt de código y rutas lazy.

Sobre las vulnerabilidades:
https://github.com/facebook/create-react-app/issues/11174
