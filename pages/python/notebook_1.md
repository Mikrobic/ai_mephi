---
layout: page
permalink: /python/notebook_1/
description: "Описание страницы Subpage"
---

**<a href="https://colab.research.google.com/drive/1M-jyyUhuUeMCbQhlaUmdjrfwF5CBll8b?usp=sharing">Ссылка на Colab</a>**

**<a href="https://github.com/Mikrobic/ai_mephi/blob/main/pages/python/jupyter/Списки.ipynb">Ссылка на ipynb</a>**

<div class="notebook-container">
  <iframe 
    src="{{'/public/notebook_html/Списки.html' | absolute_url }}" 
    style="width: 100%; height: 800px; border: 1px solid #ddd; display: block; margin: 0 auto;">
  </iframe>
</div>

<style>
  /* Стили для контейнера iframe и его содержимого */
  .notebook-container {
    width: 100%;
    overflow: auto; /* Добавляет скроллбар только если контент все еще не влезает */
  }
  .notebook-container iframe {
    width: 100%;
    /* Убирает стандартные отступы у тела документа внутри iframe */
    border: 1px solid #ddd;
  }
  /* Важное правило: заставляет содержимое внутри iframe быть адаптивным */
  /* Это сработает, если в сгенерированном HTML есть элемент с классом .jp-Notebook */
  .notebook-container iframe body {
    margin: 0;
    padding: 10px;
  }
  .notebook-container iframe .jp-Notebook {
    width: 100% !important; /* Принудительно растягиваем блокнот на всю ширину */
    padding: 0;
  }
  /* Стили для ячеек, чтобы текст в них переносился */
  .notebook-container iframe .jp-Cell {
    width: 100% !important;
    overflow-wrap: break-word;
  }
  .notebook-container iframe .jp-Cell-input {
    width: 100% !important;
  }
  .notebook-container iframe .jp-Cell-output {
    width: 100% !important;
    max-width: 100% !important; /* Важно для широких выводов, например, таблиц */
  }
</style>