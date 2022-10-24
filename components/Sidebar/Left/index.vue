<script setup>
import { HomeIcon } from "@heroicons/vue/20/solid"
const { defaultTransition } = useTailwindConfig()
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min
        dark:hover:bg-white/20
        " :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <HomeIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <HomeIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <HomeIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
        </div>

    </div>
</template>