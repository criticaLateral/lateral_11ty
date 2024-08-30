# lateral_11ty

## Instalar dependencias

```sh
npm install @11ty/eleventy
npm install sass --save-dev
npm install npm-run-all --save-dev
npm i
```

## Correr el proyecto localmente

```sh
 npm start
```

## Referencias

- <https://www.11ty.dev/>

## MD structure for a post (example)

```yaml
---
title: string
description: string
author: string
date: 2018-05-01
tags:
  - Author
  - Tag 1
  - Tag 2
extraCredits: string
featured_image: filename.jpg
thumbnail_image: filename.jpg
template: landscape bottom, landscape top, portrait left, portrait right
color: green, yellow, orange, cyan, fucsia, purple, blue, pink
permalink: 'archivo/{{ title | slugify }}-{{ date | slugDate }}/'
isFeatured: boolean
---
```
