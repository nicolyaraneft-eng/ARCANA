# Casa Arcana

Primera web de presentación y catálogo de Casa Arcana. HTML, CSS y JavaScript sin dependencias ni proceso de compilación. Las fotografías y la identidad proceden de los archivos proporcionados por la marca. Los productos son una presentación preliminar; no se publican precios, composición ni stock sin confirmar.

## Desarrollo local

Desde `/workspace/ARCANA`:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

## Publicar gratis en Cloudflare Pages

1. Sube estos archivos a tu repositorio de GitHub.
2. En Cloudflare, abre Workers & Pages y crea un proyecto Pages conectado al repositorio ARCANA.
3. Selecciona el preset **None**, sin comando de build, con directorio de salida `.` y raíz del proyecto vacía.
4. Despliega. Cloudflare asigna un subdominio gratuito `*.pages.dev`, sujeto a disponibilidad del nombre. No hace falta comprar un dominio. El plan gratuito está sujeto a las condiciones y límites vigentes de Cloudflare.

También puedes subir por carga directa una carpeta con `index.html`, `styles.css`, `app.js` y `assets/`. No incluyas archivos privados ni la carpeta `.git`. Elige la integración Git si quieres despliegues automáticos con cada cambio.

## Personalizar antes del lanzamiento

- Confirmar productos, notas aromáticas, tamaños y fotografías finales.
- Contactos configurados: Instagram `@casa.arcana.cl` y WhatsApp `+56 9 4487 7525` (enlace internacional `https://wa.me/56944877525`).
- Las fuentes se descargan de Google Fonts, con fuentes de sistema como alternativa.
- El catálogo no recoge datos personales ni procesa pagos. Para vender se necesitará definir pedidos, pagos, despachos y políticas comerciales; esa integración se puede añadir después.

La publicación requiere acceso a la cuenta Cloudflare del propietario. Esta implementación no se ha publicado automáticamente.
