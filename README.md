# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Convenciones de React ###

<!-- NOMENCLATURA -->
- Componentes se escrbien en PascalCase
- Variables y funciones se escriben en camelCase
- Los archivos y directorios deberían seguir una nomencltura con kebab-case

 <!-- INTERFACES, TYPES, CONTEXTS -->
- Para dar nombres a contextos generados con React se utilizara la palabra *Context* como sufijo del nombre que le demos, por ej. ThemeContext
- Para dar nombre a las interfaces estas deben empezar siempre con una I mayúscula, por ej. ITheme (o acabar en Interface, por ej. ThemeInterface)(se debe decidir con el equipo de desarrollo)
- Para dar nombre a los tipos estos deben empezar siempre con una T mayúscula, por ej. TTheme (o acabar en Type, por ej. ThemeType)(se debe decidir con el equipo de desarrollo)
- 

<!-- OTHER -->
- Los componentes se escriben en archivos .jsx
- Las funciones que se encargan de manejar eventos (onClick, onFocus, onPress, onToggle,...), *funciones gestoras de eventos*, se escriben siguiendo el siguiente formato, handle<function-name>


### Convencions SOLOID (programación) ###
- Tener un solo sitio de referencia para cada dato