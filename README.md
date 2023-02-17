# Descripción
Tema desarrollado como parte del proceso de selección con Balidea

# Proceso de instalación del tema

## 1. Descarga del tema

### 1.1 Descarga vía composer (recomendado)

Primero es necesario agregar el respositirio al composer.json del sitio Drupal en el que se quiere instalar el tema:

Bien sea editando el archivo:
```json
  ...
  "repositories": {
      {
          "type": "composer",
          "url": "https://packages.drupal.org/8"
      },
      {
          "type": "git",
          "url": "https://github.com/jholguin9004/balidea-theme.git"
      }
  },
  ...
```

o vía composer:
```
composer config repositories.balidea_theme git https://github.com/jholguin9004/balidea-theme.git
```

Un vez agregado el respositorio, descargar el tema:
```
composer require balidea/balidea_theme
```

 
### 1.1 Descarga manual
Descargar el módulo en el siguiente [enlace](https://github.com/jholguin9004/balidea-theme/archive/refs/tags/1.0.zip)

Una vez descargado, descomprimir en la carpeta themes/custom

## 2 Instalación
Instalar el tema de la forma habitual, desde la interfaz gráfica de drupal en el menú "Apariencia" donde el tema se encuentra con el nombre "Balidea Custom Theme".

