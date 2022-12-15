<script setup>
import {
    HomeIcon
} from "@heroicons/vue/24/solid"
import {
    HashtagIcon, BellIcon,
    InboxIcon, BookmarkIcon, DocumentTextIcon,
    UserIcon, EllipsisHorizontalCircleIcon, PencilIcon,
} from "@heroicons/vue/24/outline";
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
        <div>
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
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <HashtagIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <BellIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <InboxIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <BookmarkIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <DocumentTextIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <UserIcon />
                    </div>
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <div class="w-8 h-8">
                        <EllipsisHorizontalCircleIcon />
                    </div>
                </template>
                <template v-slot:name>
                    More
                </template>
            </SidebarLeftTab>
            <div class="pt-3 hidden xl:block">
                <UIButton liquids size="lg">
                    <strong>
                        Tweet
                    </strong>
                </UIButton>
            </div>
            
            <div class="p-2 block xl:hidden">
                <UIButton>
                    <div class="w-6 h-6 font-bold">
                        <PencilIcon />
                    </div>
                </UIButton>
            </div>
        </div>

    </div>
</template>