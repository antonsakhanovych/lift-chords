# Лифт — аккорды

Текст песни «Лифт» (Варя Пипко) с аккордами, сверстанный в [Typst](https://typst.app)
с помощью пакета [conchord](https://github.com/sitandr/conchord).

**[Открыть сайт →](https://antonsakhanovych.github.io/lift-chords/)**

Сайт позволяет проиграть песню в любой из 12 тональностей и скачать PDF.

## Локальная сборка

Требуется [Typst](https://typst.app) 0.14.2+ и Node.js.

```bash
# PDF в оригинальной тональности
typst compile lift.typ lift.pdf

# Аккорды на n полутонов выше/ниже
typst compile lift.typ --input transpose=2 lift-transposed.pdf

# Непрерывная веб-версия (без разрывов страниц)
typst compile lift.typ --input web=true --format svg lift-web.svg

# Тесты и сборка сайтового скрипта
npm install
npm test
npm run build
```

## Структура

- `lift.typ` — исходник аккордов, читает `transpose` и `web` через `sys.inputs`
- `site/` — статический сайт (HTML/CSS + TypeScript)
- `assets/` — обложка
- `.github/workflows/build.yml` — сборка всех тональностей и деплой на GitHub Pages
