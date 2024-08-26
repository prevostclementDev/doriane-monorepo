<script setup>
</script>

<template>
  <div class="layout">

    <div class="nav">

      <ui-flex direction="column" justify="space-between">

        <div class="top">
          <nuxt-link to="/">
            <ui-icons-logo type="light" />
          </nuxt-link>

          <nav class="base">
            <ui-flex direction="column" align="flex-start" gaprow="1.4rem">
              <nuxt-link to="/plannings">
                <ui-icon-text type="light small" icon="calendar" text="Planning" />
              </nuxt-link>
              <nuxt-link to="/utilisateurs">
                <ui-icon-text type="light small" icon="users" text="Utilisateurs" />
              </nuxt-link>
              <nuxt-link to="/pedagogie">
                <ui-icon-text type="light small" icon="pedagogie" text="Pédagogie" />
              </nuxt-link>
            </ui-flex>
          </nav>
        </div>

        <div class="bottom">
          <div class="container-nav-bar">
            <ui-flex>
              <nav class="additionnal">
                <ui-flex direction="column" align="flex-start" gaprow="1.4rem">
                  <nuxt-link to="/docs">
                    <ui-icon-text type="light small" icon="docs" text="Docs" />
                  </nuxt-link>
                  <nuxt-link to="/">
                    <ui-icon-text type="light small" icon="notification" text="Notifications" />
                  </nuxt-link>
                  <nuxt-link to="/parametre">
                    <ui-icon-text type="light small" icon="params" text="Paramètre" />
                  </nuxt-link>
                </ui-flex>
              </nav>
            </ui-flex>
          </div>
          <ui-profile />
        </div>

      </ui-flex>

    </div>

    <div class="content">
      <slot />
    </div>

  </div>
</template>

<style scoped lang="scss">
.layout {

  @include grid(
    1fr,
    15rem 1fr,
    "navbar content"
  );

  .nav {
    grid-area: navbar;
    @include bgColor(primary0);
    padding: 1.75rem 0;
    height: 100vh;
    position: fixed;

    .top {
      @include flex(center,center,column);
      padding: 0 1rem;

      nav.base {
        margin-top: 4rem;

        a {
          text-decoration: none;

        }

      }

    }

    .bottom {
      width: 100%;
      height: fit-content;

      nav.additionnal {
        padding: 0 1rem;
        width: fit-content;

        a {
          text-decoration: none;

        }

      }

      .container-nav-bar {
        margin-bottom: 2rem;

      }

    }

  }

  .content {
    grid-area: content;
    @include bgColor(light1);
    min-height: 100vh;
    padding: 2rem 3rem;

  }

}
</style>