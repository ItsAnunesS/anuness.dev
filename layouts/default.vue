<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead();
</script>

<template>
	<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
		<Head>
			<Title>{{ 'oi' }}</Title>
			<template v-for="link in head.link" :key="link.hid">
				<Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
			</template>
			<template v-for="meta in head.meta" :key="meta.hid">
				<Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
			</template>
		</Head>
		<Body>
			<div class="drawer">
				<input id="anuness-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content flex flex-col">
					<CoreMenu />
					<slot />
					<CoreFooter />
				</div>
				<div class="drawer-side">
					<label for="anuness-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
					<ul class="menu bg-base-200 min-h-full w-80 p-4">
						<li><a>Sidebar Item 1</a></li>
						<li><a>Sidebar Item 2</a></li>
					</ul>
				</div>
			</div>
		</Body>
	</Html>
</template>
