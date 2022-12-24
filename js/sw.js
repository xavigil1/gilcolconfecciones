

let version = "version 1";
const archivos = [
			'../',
			'../index.html',
			'../nosotros.html',
			'../colecciones.html',
			'../blog.html',
			'../contacto.html',
			'../15años.html',
			'../casualf.html',
			'../fantasias.html',
			'../galas.html',
			'../novias.html',
			'../vniñas.html',
			'../newcollection.html',
			'../collectionDec22.html',
			'../css/estilos.css',
			'../css/estilos2.css',
			'../css/estilos3.css',
			'../css/estilos4.css',
			'../css/estilos5.css',
			'../css/estilos6.css',
			'../css/navbar.css',
			'codigo.js',];

/*Instalacion del Service Worker*/
self.addEventListener("install", e=>{
	console.log("Instalando Service Worker");
	caches.open(version).then(cache=>{
		cache.addAll(archivos).then(res =>{
			console.log("Informacion Cacheada con Exito");
		}).catch(e =>{
			console.log(e);
		})
	})	
})

/*Eliminamos Cache en caso de que haya informacion*/
self.addEventListener("activate", ()=>{
	caches.keys().then(key =>{
		return Promise.all(key.map(cache =>{
			if (cache !== version){
				console.log("Cache Antiguo Eliminado con Exito");
				return caches.delete(cache);
			}
		}))
	})
})


/*Muestra la informacion en Cache sin Internet*/
self.addEventListener("fetch", e =>{
	e.respondWith( async function(){
		const respuestaEnCache = await caches.match(e.request);
		if (respuestaEnCache){
			return respuestaEnCache
		}else{
			return e.request
		}
	})
})