<template>
  <aside class="menu" :class="{'is-active': isActive, 'is-inactive': !isActive}">
    <div v-if="isActive" class="container">
      <div>
        <img src="~/assets/icons/close.svg" @click="toggleMenu()" />
      </div>
      <img src="~/assets/icons/babyfoot.svg" />
    </div>
    <div v-else>
      <div>
        <img src="~/assets/icons/burger.svg" @click="toggleMenu()" />
      </div>
    </div>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index" class="menu-item">
        <NuxtLink :to="item.to.path" class="menu-item-link">
          <span class="menu-item-link-icon">
            <img :src="require(`~/assets/icons/${item.icon}.svg`)" />
          </span>
          <span>
            {{ item.title }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isActive: true,
      items: [
        {
          title: 'Accueil',
          icon: 'match',
          to: { name: 'index', path: '/' }
        },
        {
          title: 'Classements',
          icon: 'ranks',
          to: { name: 'ranks', path: '/ranks' }
        }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: width 0.2s ease-out;

  &.is-active {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 18%;
      padding: .5rem;
      border-bottom: 1px solid #eee;
      div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        img {
          cursor: pointer;
        }
      }
    }
    .menu-list {
      min-height: 100vh;
      width: 100%;
    }
    .menu-item {
      padding: 1rem;
      width: 100%;
      border-bottom: 1px solid #eee;
      &:hover {
        background: #f5f5f5;
      }
      &:last-child {
        border-bottom: none;
      }
      &-link {
        display: flex !important;
        align-items: center;
        padding: 0.5rem 1rem;
        color: #333;
        text-decoration: none;
        align-items: center;
        justify-content: flex-start;
        &:hover {
          color: #000;
        }
        &-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }

  &.is-inactive {
    width: 70px;
    .container {
      display: none;
    }

    div {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #eee;
      padding: .5rem;
      cursor: pointer;
    }
    .menu-list {
      min-height: 100vh;
      width: 100%;
    }
    .menu-item {
      padding: 1rem;
      width: 100%;
      border-bottom: 1px solid #eee;
      &:hover {
        background: #f5f5f5;
      }
      &:last-child {
        border-bottom: none;
      }
      &-link {
        display: flex !important;
        align-items: center;
        justify-content: center;
        padding: unset !important;
        span:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
