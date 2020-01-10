<template>
	<div id="header" class="header">
		<div class="header-inner">
			<!-- <h1 class="logo">my-portfolio</h1> -->
			<button v-on:click="toggleMenu" class="menu-btn">Menu</button>
		</div>

		<transition name="fade">
			<nav v-if="isOpen" class="header-nav">
					<div v-on:click="toggleMenu" class="nav-close">Close</div>
					<div class="nav-wrap">
						<div class="nav-title">Menu</div>
							<ul class="nav-menu">
								<li><a href="/">Top</a></li>
								<li><a href="/about/">About</a></li>
								<li><a href="/history/">History</a></li>
								<li><a href="/project/">Project</a></li>
								<li><a href="/contact/">Contact</a></li>
							</ul>
					</div>
				</nav>
		</transition>

	</div>
</template>

<script>

export default {
	// var app = new Vue({
	// 	el: '#header',
	
		data: function () {
			return {
				isOpen: false,
			}
 		},
		methods: {
			toggleMenu: function () {
				this.isOpen = !this.isOpen
			}
		}
	// })
}
</script>