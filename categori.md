---
layout: page
permalink: /categori/
title: Kategori
---

<ul>
{% capture tags %}
  {% for tag in site.tags %}
    <li data-sort="{{ site.posts.size | minus: tag[1].size | prepend: '0000' | slice: -4, 4 }}">
       <a href="/{{ site.tag_page_dir }}/{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }} <span>{{ tag[1].size }}</span></a>
    </li>
  {% endfor %}
{% endcapture %}
{{ tags | split:'</li>' | sort | join:'</li>' }}
</ul>

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
<div id="{{ tag[0] }}" class="box box-success box-solid"> 
<div class="box-header">
  <div class="box-title">
    {{ tag[0] | capitalize | replace:'-', ' '}}
  </div>
</div>
<div class="box-body">
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
</div>
{% endfor %}
  </div>
</div>