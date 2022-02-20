---
title: Bibliography
---

<script src=bibliography.js></script>

# Bibliography

[Return to the home page][Home]

This is a collection of resources used in the [Nisinoon project][Home] to collect data on derivational morphemes in Algonquian languages. It was compiled by [Monica Macaulay][Monica] (University of Wisconsin-Madison) and [Hunter Lockwood][Hunter] (Myaamia Center, Miami University) with the help of Savana Stauss, Anushri Kartik-Narayan, and Rachel Fedorchak.

This material is based upon work supported by the National Science Foundation under Grant No. BCS-1953103.

If you see an error in this bibliography, or would like to suggest any additions, please email Monica Macaulay at [mmacaula@wisc.edu](mailto:mmacaula@wisc.edu).

## References

[Download this bibliography as a PDF.][bib-pdf]

<p class=last-updated data-details=open>Last updated {{ "today" | date: "%B %e, %Y" }}</p>

<button class='expand-collapse-button button' type=button name=expand-collapse hidden>Hide Notes</button>

<ul class=reference-list>
  {%- for reference in site.data.references -%}
    {% include reference.html %}
  {%- endfor -%}
</ul>

<button class='expand-collapse-button button' type=button name=expand-collapse hidden>Hide Notes</button>

<!-- Links -->
[bib-pdf]: https://nisinoon.net/bibliography/bibliography.pdf
[Home]:    https://nisinoon.net/
[Hunter]:  http://miamioh.edu/myaamia-center/about/staff-faculty-affiliates/lockwood/index.html
[Monica]:  https://monicamacaulay.com/
