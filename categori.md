---
layout: page
permalink: /categori/
title: Kategori
---

<div class="row">
  <div class="col-md-4 pull-right">
    <ul class="kategori">
        {% assign categories = site.categories | sort %}
        {% for category in categories %}
         <li>
            <a href="/categori/#{{category[0]| capitalize}}">
                    {{ category[0] | replace:'-', ' ' | capitalize}} ({{ category | last | size }})
            </a>
         </li>
        {% endfor %}
    </ul>
  </div>
  <div class="col-md-8 pull-left">
    {% for tag in categories %}
    <div id="{{ tag[0] | capitalize }}" class="box box-solid"> 
      <div class="box-header">
        <div class="box-title">
          {{ tag[0] | capitalize | replace:'-', ' '}}
        </div>
      </div>
      <div class="box-body">
          <ul class="view-kategori">
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
    </div>
    {% endfor %}
  </div>
</div>