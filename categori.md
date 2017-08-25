---
layout: page
permalink: /categori/
title: Kategori
---

<div class="row">
<div class="col-md-4 pull-right">
<ul>
    {% assign categories = site.categories | sort %}
    {% for category in categories %}
     <li>
        <a href="/categori/#{{ category | first | slugify }}">
                {{ category[0] | replace:'-', ' ' | capitalize}} ({{ category | last | size }})
        </a>
     </li>
    {% endfor %}
</ul>
  
</div>

  <div class="col-md-8">
    
{% for tag in site.categories %}
<div id="{{ tag[0] }}"> 
  <h3 >{{ tag[0] | capitalize | replace:'-', ' '}}</h3>
  <ul>
    {% assign pages_list = tag[1] %}
    {% for post in pages_list %}
      {% if post.title != null %}
      {% if group == null or group == post.group %}
      <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}<span class="entry-date"></span></a></li>
      {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
</div>
{% endfor %}
  </div>
</div>