---
layout: page
permalink: /notebook/
description: "Тест автоматизации лекций"
---

<div style="text-align: center;">

{% if site.data.notebook %}
  {% for section in site.data.notebook %}
  <strong>{{ section.section }}</strong><br><br>

  {% for topic in section.topics %}
  <span class="lesson-title">«{{ topic.title }}»</span><br>

  {% for lecture in topic.lectures %}
  {% comment %} Нумерация кружочками {% endcomment %}
  {% if lecture.number == 10 %}①⓪
  {% elsif lecture.number == 11 %}①①
  {% elsif lecture.number == 12 %}①②
  {% elsif lecture.number == 13 %}①③
  {% elsif lecture.number == 1 %}①
  {% elsif lecture.number == 2 %}②
  {% elsif lecture.number == 3 %}③
  {% elsif lecture.number == 4 %}④
  {% elsif lecture.number == 5 %}⑤
  {% elsif lecture.number == 6 %}⑥
  {% elsif lecture.number == 7 %}⑦
  {% elsif lecture.number == 8 %}⑧
  {% elsif lecture.number == 9 %}⑨
  {% endif %}
  
  {{ lecture.emoji }} <strong><a href="{{ lecture.link }}">{{ lecture.type }} ({{ lecture.date }})</a></strong><br>
  {% endfor %}<br>
  {% endfor %}

  <hr style="margin: 5px 0; border: 0; border-top: 1px solid #ccc;"><br>

  {% endfor %}
  
{% else %}
  <h2>Тестовая страница</h2>
  <p>Если все работает, вы увидите данные выше</p>
  <p style="color: red;">❌ Данные НЕ найдены в site.data.notebook</p>
{% endif %}

</div>