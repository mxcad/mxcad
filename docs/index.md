---
layout: home
---

<script setup>
import { useData } from 'vitepress'
const { site, dir } = useData()
window.location.assign(`${site.value.base}${dir.value}/`);
</script>
