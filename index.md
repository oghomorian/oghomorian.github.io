---
title: Home
layout: home
nav_order: 1
permalink: /
---

# 파이널판타지14 고난도 임무 정리본

---

{% assign current_page = site.pages | where: "path", "docs/current/index.md" | first %}
{% assign current_title = current_page.title %}
{% assign current_content = current_page.content %}

## {{ current_title }}  <span class="label">최신 컨텐츠</span>
{{ current_content }}

---

{% assign upcoming_page = site.pages | where: "path", "docs/upcoming.md" | first %}
{% assign upcoming_title = upcoming_page.title %}
{% assign upcoming_content = upcoming_page.content %}

## {{ upcoming_title }}  <span class="label label-yellow">업데이트 예정</span>
{{ upcoming_content }}

---

### 비고사항

 - 영웅 난이도 레이드와 절 난이도 레이드 자료 위주
