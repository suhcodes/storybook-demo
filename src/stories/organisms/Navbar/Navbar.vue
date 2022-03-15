<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <div class="uk-navbar-item">
        <form class="uk-search uk-search-navbar">
          <span uk-search-icon></span>
          <input
            class="uk-search-input"
            type="search"
            placeholder="Pressione &quot;enter&quot; para buscar" 
            id="searchInput"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'my-navbar',
  props: {
    modelValue: {
      type: String
    }
  }
}
</script>
