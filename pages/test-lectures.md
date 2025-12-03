---
layout: page
permalink: /test-lectures/
title: "Тестовая страница лекций"
description: "Тест автоматизации лекций"
---

<div style="text-align: center;">

{% if site.data.lectures %}
  {% comment %} Функция для преобразования цифр в кружочки {% endcomment %}
  {% assign circles = "①②③④⑤⑥⑦⑧⑨" %}
  
  {% for section in site.data.lectures %}
  <strong>{{ section.section }}</strong><br><br>

  {% for topic in section.topics %}
  <span class="lesson-title">«{{ topic.title }}»</span><br>

  {% for lecture in topic.lectures %}
  {% comment %} Преобразуем номер в кружочек {% endcomment %}
  {% if lecture.number %}
    {% assign num = lecture.number %}
    {% if num == 10 %}①⓪
    {% elsif num == 11 %}①①
    {% elsif num == 12 %}①②
    {% elsif num == 13 %}①③
    {% else %}
      {{ circles | slice: num | minus: 1 }}
    {% endif %}
  {% endif %}
  {{ lecture.emoji }} <strong><a href="{{ lecture.link }}">{{ lecture.type }} ({{ lecture.date }})</a></strong><br>
  {% endfor %}<br>
  {% endfor %}

  {% unless forloop.last %}
  <hr style="margin: 5px 0; border: 0; border-top: 1px solid #ccc;"><br>
  {% endunless %}

  {% endfor %}
  
{% else %}
  <h2>Данные не найдены!</h2>
  <p style="color: red;">❌ Файл _data/lectures.yml не найден или пуст</p>
  <p>Проверьте:</p>
  <ul style="text-align: left; display: inline-block;">
    <li>Существует ли папка <code>_data</code>?</li>
    <li>Есть ли файл <code>_data/lectures.yml</code>?</li>
    <li>Правильный ли синтаксис YAML?</li>
  </ul>
{% endif %}

</div>