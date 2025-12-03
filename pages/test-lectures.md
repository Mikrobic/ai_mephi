---
layout: page
permalink: /test-lectures/
title: "Тестовая страница лекций"
description: "Тест автоматизации лекций"
---

<div style="text-align: center;">

<h2>Это тестовая страница</h2>
<p>Если все работает, вы увидите данные ниже:</p>
<hr>

{% if site.data.lectures %}
  <p style="color: green;">✅ Данные найдены в site.data.lectures</p>
  
  {% for section in site.data.lectures %}
  <h3>{{ section.section }}</h3>
  
  {% for topic in section.topics %}
  <p><strong>Тема:</strong> {{ topic.title }}</p>
  
  {% for lecture in topic.lectures %}
  <div style="margin-left: 20px;">
    • {{ lecture.emoji }} 
    <a href="{{ lecture.link }}">{{ lecture.type }}</a> 
    ({{ lecture.date }})
  </div>
  {% endfor %}
  <br>
  {% endfor %}
  
  <hr>
  {% endfor %}
  
{% else %}
  <p style="color: red;">❌ Данные НЕ найдены в site.data.lectures</p>
  <p>Проверьте:</p>
  <ul>
    <li>Существует ли папка _data?</li>
    <li>Есть ли файл _data/lectures.yml?</li>
    <li>Правильный ли синтаксис YAML?</li>
  </ul>
{% endif %}

</div>