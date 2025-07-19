---
layout: default
title: 타임라인
parent: 크루저웨이트급 1
permalink: /7.0_dawntrail/savage_raids/m5s/timeline/
---

# **아르카디아 선수권 크루저웨이트급 1 타임라인**

{% include memo-script.html %}

<table>
  <thead>
    <tr>
      <th>시간</th><th>기술명</th><th colspan="8">비고사항</th>
    </tr>
  </thead>
  <tbody>
    {% for entry in site.data.m5s_timeline %}
    <tr>
      <td class="timestamp align-c" rowspan="2">{{ entry.time }}</td>
      <td class="fontw-b align-c">{{ entry.skill }}</td>
      <td><div class="memo-container"></div></td>
    </tr>
    <tr>
      <td class="fonts-s align-c">{{ entry.description }}</td>
      <td class="fonts-s">{{ entry.memo }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
